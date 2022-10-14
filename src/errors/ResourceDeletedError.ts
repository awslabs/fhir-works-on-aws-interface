/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

// eslint-disable-next-line import/prefer-default-export
export class ResourceDeletedError extends Error {
    readonly isResourceDeletedError: boolean;

    readonly resourceType: string;

    readonly id: string;

    readonly versionId: string;

    constructor(resourceType: string, id: string, versionId: string, message?: string) {
        const msg = message || `Resource ${resourceType}/${id} is deleted`;
        // Node Error class requires passing a string message to the parent class
        super(msg);
        Object.setPrototypeOf(this, ResourceDeletedError.prototype);
        this.resourceType = resourceType;
        this.id = id;
        this.versionId = versionId;
        this.name = this.constructor.name;
        this.isResourceDeletedError = true;
    }
}
export function isResourceDeletedError(error: unknown): error is ResourceDeletedError {
    return Boolean(error) && (error as ResourceDeletedError).isResourceDeletedError === true;
}
