/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

// eslint-disable-next-line import/prefer-default-export
export class InvalidResourceError extends Error {
    constructor(message = 'Invalid Resource') {
        // Node Error class requires passing a string message to the parent class
        super(message);
        this.name = this.constructor.name;
    }
}
