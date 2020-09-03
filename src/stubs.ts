/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Search } from './search';
import { History } from './history';
import { Authorization } from './authorization';
import { Persistence } from './persistence';
import { Bundle } from './bundle';
import { ExportJobStatus, ExportRequestGranularity, R4Resource, STU3Resource } from './constants';

export module stubs {
    export const bundle: Bundle = {
        batch(request) {
            throw new Error('Method not implemented.');
        },

        transaction(request) {
            throw new Error('Method not implemented.');
        },
    };

    export const search: Search = {
        typeSearch(request) {
            throw new Error('Method not implemented.');
        },

        globalSearch(request) {
            throw new Error('Method not implemented.');
        },
    };

    export const history: History = {
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

    export const passThroughAuthz: Authorization = {
        isAuthorized(request): boolean {
            return true;
        },

        async isBundleRequestAuthorized(request) {
            return true;
        },
    };

    export const persistence: Persistence = {
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

        initiateExport(request) {
            throw new Error('Method not implemented.');
        },

        cancelExport(jobId) {
            throw new Error('Method not implemented');
        },

        getExportStatus(jobId) {
            throw new Error('Method not implemented');
        },
    };
}
