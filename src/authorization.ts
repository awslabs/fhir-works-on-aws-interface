/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import { BatchReadWriteRequest } from './bundle';
import { TypeOperation, SystemOperation } from './constants';

export interface AuthorizationRequest {
    accessToken: string;
    operation: TypeOperation | SystemOperation;
    resourceType?: string;
    id?: string;
    vid?: string;
}

export interface AuthorizationBundleRequest {
    accessToken: string;
    requests: BatchReadWriteRequest[];
}

export interface AllowedResourceTypesForOperationRequest {
    accessToken: string;
    operation: TypeOperation | SystemOperation;
}

export interface Authorization {
    /**
     * Validates if the requestor is authorized to perform the action requested
     */
    isAuthorized(request: AuthorizationRequest): Promise<boolean>;
    /**
     * Used to authorize Bundle transactions
     */
    isBundleRequestAuthorized(request: AuthorizationBundleRequest): Promise<boolean>;
    /**
     * Returns the resourceTypes for which the requester is allowed to perform the given operation.
     */
    getAllowedResourceTypesForOperation(request: AllowedResourceTypesForOperationRequest): Promise<string[]>;
}
