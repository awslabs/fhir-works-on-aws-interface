/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

// eslint-disable-next-line import/prefer-default-export
export class UnauthorizedAccessError extends Error {
    constructor(message = 'User is not authorized to access this resource') {
        // Node Error class requires passing a string message to the parent class
        super(message);
        Object.setPrototypeOf(this, UnauthorizedAccessError.prototype);
        this.name = this.constructor.name;
    }
}
