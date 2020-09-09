import { ExportType } from './constants';

export interface InitiateExportRequest {
    requesterUserId: string;
    exportType: ExportType;
    transactionTime: number;
    outputFormat?: string;
    since?: number;
    type?: string;
    groupId?: string;
}

export interface GetExportStatusResponse {
    jobStatus: string;
    exportedFileUrls?: [{ type: string; url: string }];
    transactionTime?: number;
    requestGranularity?: ExportType;
    requestQueryParams?: { _outputFormat?: string; _since?: number; _type?: string };
}
export type ExportJobStatus = 'completed' | 'failed' | 'in-progress' | 'canceled' | 'canceling';

export interface BulkDataAccess {
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
