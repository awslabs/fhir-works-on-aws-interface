/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

// eslint-disable-next-line import/prefer-default-export
export class InvalidResourceError extends Error {
    readonly isInvalidResourceError: boolean;

    constructor(message = 'Invalid Resource') {
        // Node Error class requires passing a string message to the parent class
        super(message);
        Object.setPrototypeOf(this, InvalidResourceError.prototype);
        this.isInvalidResourceError = true;
        this.name = this.constructor.name;
    }
}
export function isInvalidResourceError(err: InvalidResourceError | unknown): err is InvalidResourceError {
    return (
        (err as InvalidResourceError).isInvalidResourceError !== undefined &&
        (err as InvalidResourceError).isInvalidResourceError === true
    );
}
