/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

// eslint-disable-next-line import/prefer-default-export
export class TooManyConcurrentExportRequestsError extends Error {
    constructor(message = 'Too Many Concurrent Export Requests') {
        // Node Error class requires passing a string message to the parent class
        super(message);
        Object.setPrototypeOf(this, TooManyConcurrentExportRequestsError.prototype);
        this.name = this.constructor.name;
    }
}
