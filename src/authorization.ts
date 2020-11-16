/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import { BatchReadWriteRequest } from './bundle';
import { TypeOperation, SystemOperation, KeyValueMap } from './constants';
import { ExportType } from './bulkDataAccess';

export interface VerifyAccessTokenRequest {
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
    userIdentity: KeyValueMap;
    requests: BatchReadWriteRequest[];
}

export interface AllowedResourceTypesForOperationRequest {
    userIdentity: KeyValueMap;
    operation: TypeOperation | SystemOperation;
}

export interface AccessBulkDataJobRequest {
    userIdentity: KeyValueMap;
    jobOwnerId: string;
}

export interface ReadResponseAuthorizedRequest {
    userIdentity: KeyValueMap;
    operation: TypeOperation | SystemOperation;
    readResponse: any;
}

export interface WriteRequestAuthorizedRequest {
    userIdentity: KeyValueMap;
    operation: TypeOperation;
    resourceBody: any;
}

export interface Authorization {
    /**
     * Validates the access token and returns the userIdentity
     * @returns decoded access token; effectively the userIdentity
     * @throws UnauthorizedError
     */
    verifyAccessToken(request: VerifyAccessTokenRequest): Promise<KeyValueMap>;
    /**
     * Used to authorize Bundle transactions
     * @throws UnauthorizedError
     */
    isBundleRequestAuthorized(request: AuthorizationBundleRequest): Promise<void>;
    /*
     * Used to determine if a requester can access a Bulk Data Job
     * @throws UnauthorizedError
     */
    isAccessBulkDataJobAllowed(request: AccessBulkDataJobRequest): Promise<void>;
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
