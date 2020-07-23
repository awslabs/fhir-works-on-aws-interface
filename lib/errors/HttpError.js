"use strict";
/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class HttpError extends Error {
    constructor(message, statusCode, errorDetail) {
        // Node Error class requires passing a string message to the parent class
        super(message);
        this.errorDetail = errorDetail;
        this.statusCode = statusCode;
    }
}
exports.default = HttpError;
//# sourceMappingURL=HttpError.js.map