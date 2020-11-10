/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import { BatchReadWriteRequest } from './bundle';
import { TypeOperation, SystemOperation } from './constants';
import { ExportType } from './bulkDataAccess';

export interface AuthorizationRequest {
    accessToken: string;
    operation: TypeOperation | SystemOperation;
    resourceType?: string;
    id?: string;
    vid?: string;
    bulkDataAuth?: BulkDataAuth;
}

export interface BulkDataAuth {
    operation:
        | 'initiate-export'
        | 'initiate-import'
        | 'get-status-export'
        | 'get-status-import'
        | 'cancel-export'
        | 'cancel-import';
    exportType?: ExportType;
    importResources?: string[];
}

export interface AuthorizationBundleRequest {
    accessToken: string;
    requests: BatchReadWriteRequest[];
}

export interface AllowedResourceTypesForOperationRequest {
    accessToken: string;
    operation: TypeOperation | SystemOperation;
}

export interface AccessBulkDataJobRequest {
    requesterUserId: string;
    jobOwnerId: string;
}

export interface ReadResponseAuthorizedRequest {
    accessToken: string;
    operation: TypeOperation | SystemOperation;
    readResponse: any;
}

export interface WriteRequestAuthorizedRequest {
    accessToken: string;
    operation: TypeOperation;
    resourceBody: any;
}

export interface Authorization {
    /**
     * Validates if the requester is authorized to perform the action requested
     * @throws UnauthorizedError
     */
    isAuthorized(request: AuthorizationRequest): Promise<void>;
    /**
     * Used to authorize Bundle transactions
     * @throws UnauthorizedError
     */
    isBundleRequestAuthorized(request: AuthorizationBundleRequest): Promise<void>;

    /*
     * Used to determine if a requester can access a Bulk Data Job
     */
    isAccessBulkDataJobAllowed(request: AccessBulkDataJobRequest): Promise<void>;

    /**
     * Get requester unique userId
     */
    getRequesterUserId(accessToken: string): string;
    /**
     * @returns resourceTypes for which the requester is allowed to perform the requested operation.
     */
    getAllowedResourceTypesForOperation(request: AllowedResourceTypesForOperationRequest): Promise<string[]>;
    /**
     * Filters and validates the read response per the specific user
     * @returns a potentially filtered readResponse
     * @throws UnauthorizedError
     */
    authorizeAndFilterReadResponse(request: ReadResponseAuthorizedRequest): Promise<any>;
    /**
     * Examines the writes request body to authorize if user is allowed to perform the action requested
     * @throws UnauthorizedError
     */
    isWriteRequestAuthorized(request: WriteRequestAuthorizedRequest): Promise<void>;
}
