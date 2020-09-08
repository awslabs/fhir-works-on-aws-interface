/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import { BatchReadWriteRequest } from './bundle';
import { TypeOperation, SystemOperation, ExportType } from './constants';

export interface AuthorizationRequest {
    accessToken: string;
    operation: TypeOperation | SystemOperation;
    resourceType?: string;
    id?: string;
    vid?: string;
    exportType?: ExportType;
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
