/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

// eslint-disable-next-line import/prefer-default-export
export class BadRequestError extends Error {
    constructor(message = 'Too Many Requests') {
        // Node Error class requires passing a string message to the parent class
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
        this.name = this.constructor.name;
    }
}
