"use strict";
/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = __importDefault(require("./HttpError"));
class BadRequestError extends HttpError_1.default {
    constructor(errorDetail) {
        // Node Error class requires passing a string message to the parent class
        super('Bad Request', 400, errorDetail);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }
}
exports.default = BadRequestError;
//# sourceMappingURL=BadRequestError.js.map