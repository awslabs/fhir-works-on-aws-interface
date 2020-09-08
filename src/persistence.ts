/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import { GenericResponse } from './genericResponse';
import { ExportType, R4Resource } from './constants';

export interface CreateResourceRequest {
    resourceType: string;
    resource: any;
    id?: string;
}

export interface UpdateResourceRequest {
    id: string;
    resourceType: string;
    resource: any;
    vid?: string; // used in version aware update
}

export interface PatchResourceRequest {
    id: string;
    resourceType: string;
    resource: any;
    vid?: string; // used in version aware patch
}

export interface ReadResourceRequest {
    id: string;
    resourceType: string;
}

export interface vReadResourceRequest {
    id: string;
    vid: string;
    resourceType: string;
}

export interface DeleteResourceRequest {
    id: string;
    resourceType: string;
}

export interface ConditionalDeleteResourceRequest {
    resourceType: string;
}

export interface InitiateExportRequest {
    requesterUserId: string;
    requestGranularity: ExportType;
    transactionTime: number;
    outputFormat?: string;
    since?: number;
    type?: string;
    groupId?: string;
}

export interface GetExportStatusResponse {
    jobStatus: string;
    exportedFileUrls?: [{ type: R4Resource; url: string }];
    transactionTime?: number;
    requestGranularity?: ExportType;
    requestQueryParams?: { _outputFormat?: string; _since?: number; _type?: string };
}

export type ExportJobStatus = 'completed' | 'failed' | 'in-progress' | 'canceled' | 'canceling';

export interface Persistence {
    readonly updateCreateSupported: boolean;

    /**
     * Create a new FHIR resource
     */
    createResource(request: CreateResourceRequest): Promise<GenericResponse>;

    /**
     * Conditionally create a new FHIR resource
     * For conditional information: https://www.hl7.org/fhir/http.html#ccreate
     */
    conditionalCreateResource(request: CreateResourceRequest, queryParams: any): Promise<GenericResponse>;

    /**
     * Update a FHIR resource; Note this method may support 'Update as Create' where it is
     * a 'create' that allows the client to supply the resourceId. This behavior should be
     * dependent on the supplied updateCreateSupported parameter
     */
    updateResource(request: UpdateResourceRequest): Promise<GenericResponse>;

    /**
     * Conditionally update a FHIR resource; Note this method may support 'Update as Create' where it is
     * a 'create' that allows the client to supply the resourceId. This behavior should be
     * dependent on the supplied updateCreateSupported parameter
     * For conditional information: https://www.hl7.org/fhir/http.html#cond-update
     */
    conditionalUpdateResource(request: UpdateResourceRequest, queryParams: any): Promise<GenericResponse>;

    /**
     * Patch updates specified attributes of the resource.
     * Useful when a client is minimizing bandwidth, or in scenarios with partial resource access
     */
    patchResource(request: PatchResourceRequest): Promise<GenericResponse>;

    /**
     * Conditionally patch attributes of a specified resource.
     * Useful when a client is minimizing bandwidth, or in scenarios with partial resource access
     * For conditional information: https://www.hl7.org/fhir/http.html#patch
     */
    conditionalPatchResource(request: PatchResourceRequest, queryParams: any): Promise<GenericResponse>;

    /**
     * Operation that accesses the current contents of a resource
     */
    readResource(request: ReadResourceRequest): Promise<GenericResponse>;

    /**
     * Performs a version specific read of the resource
     */
    vReadResource(request: vReadResourceRequest): Promise<GenericResponse>;

    /**
     * Delete interaction means that subsequent non-version specific reads cannot be found and that the resource is no
     * longer found through search interactions
     *
     * For servers that maintain a version history, the delete interaction does not remove a resource's
     * version history. From a version history respect, deleting a resource is the equivalent of creating
     * a special kind of history entry that has no content and is marked as deleted.
     *
     * NOTE: implementors are free to completely delete the resource and it's history if policy or business rules make this
     * the appropriate action to take.
     */
    deleteResource(request: DeleteResourceRequest): Promise<GenericResponse>;

    /**
     * Delete interaction means that subsequent non-version specific reads cannot be found and that the resource is no
     * longer found through search interactions
     *
     * For servers that maintain a version history, the delete interaction does not remove a resource's
     * version history. From a version history respect, deleting a resource is the equivalent of creating
     * a special kind of history entry that has no content and is marked as deleted.
     *
     * For conditional information: https://www.hl7.org/fhir/http.html#3.1.0.7.1
     *
     * NOTE: implementors are free to completely delete the resource and it's history if policy or business rules make this
     * the appropriate action to take.
     */
    conditionalDeleteResource(request: ConditionalDeleteResourceRequest, queryParams: any): Promise<GenericResponse>;

    /**
     * Start the job for exporting the database into downloadable files. The file format of the downloadable files
     * is specified by '_outputFormat'. This interface is to support the bulk export request API
     * https://hl7.org/Fhir/uv/bulkdata/export/index.html#bulk-data-kick-off-request
     * @param initiateExportRequest - request to initiate export
     * @return jobId - id of the export job that was created
     */
    initiateExport(initiateExportRequest: InitiateExportRequest): Promise<string>;

    /**
     * Cancel an export request that is currently running and delete any files that might have been
     * generated during the export. This interface is to support the bulk export DELETE API
     * https://hl7.org/Fhir/uv/bulkdata/export/index.html#bulk-data-delete-request
     * @param jobId - Id of the job you would like to cancel the export request for
     */
    cancelExport(jobId: string): Promise<void>;

    /**
     * Get the current status of the export request. This includes the jobStatus of the job.
     * If the jobStatus is completed return the exportedFileUrls of the exported files.
     * Example of exportedFileUrls object: { Patient: [ s3Url1.com, s3Url2.com], Medication: [s3Url3.com]}
     * This interface is to support the bulk export Data Status Request API
     * https://hl7.org/Fhir/uv/bulkdata/export/index.html#bulk-data-status-request
     * @param jobId - Id of the job you would like to get the export status for
     * @return GetExportStatusResponse - The status of the export job as well as additional metadata information if the job is now completed
     */
    getExportStatus(jobId: string): Promise<GetExportStatusResponse>;
}
