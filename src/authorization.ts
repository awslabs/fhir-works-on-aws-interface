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

export interface Authorization {
    /**
     * Validates if the requester is authorized to perform the action requested
     */
    isAuthorized(request: AuthorizationRequest): boolean;
    /**
     * Used to authorize Bundle transactions
     */
    isBundleRequestAuthorized(request: AuthorizationBundleRequest): Promise<boolean>;

    /**
     * Get requester unique userId
     */
    getRequesterUserId(accessToken: string): string;
}
