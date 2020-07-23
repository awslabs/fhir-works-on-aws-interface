"use strict";
/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.stubs = void 0;
var stubs;
(function (stubs) {
    stubs.bundle = {
        batch(request) {
            throw new Error('Method not implemented.');
        },
        transaction(request) {
            throw new Error('Method not implemented.');
        },
    };
    stubs.search = {
        typeSearch(request) {
            throw new Error('Method not implemented.');
        },
        globalSearch(request) {
            throw new Error('Method not implemented.');
        },
    };
    stubs.history = {
        instanceHistory(request) {
            throw new Error('Method not implemented.');
        },
        typeHistory(request) {
            throw new Error('Method not implemented.');
        },
        globalHistory(request) {
            throw new Error('Method not implemented.');
        },
    };
    stubs.passThroughAuthz = {
        isAuthorized(request) {
            return true;
        },
        async isBundleRequestAuthorized(request) {
            return true;
        },
    };
    stubs.persistence = {
        updateCreateSupported: false,
        createResource(request) {
            throw new Error('Method not implemented.');
        },
        conditionalCreateResource(request, queryParams) {
            throw new Error('Method not implemented.');
        },
        updateResource(request) {
            throw new Error('Method not implemented.');
        },
        conditionalUpdateResource(request, queryParams) {
            throw new Error('Method not implemented.');
        },
        patchResource(request) {
            throw new Error('Method not implemented.');
        },
        conditionalPatchResource(request, queryParams) {
            throw new Error('Method not implemented.');
        },
        readResource(request) {
            throw new Error('Method not implemented.');
        },
        vReadResource(request) {
            throw new Error('Method not implemented.');
        },
        deleteResource(request) {
            throw new Error('Method not implemented.');
        },
        conditionalDeleteResource(request, queryParams) {
            throw new Error('Method not implemented.');
        },
    };
})(stubs = exports.stubs || (exports.stubs = {}));
//# sourceMappingURL=stubs.js.map