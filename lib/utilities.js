"use strict";
/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestInformation = exports.cleanAuthHeader = exports.clone = exports.chunkArray = void 0;
function chunkArray(myArray, chunkSize) {
    const results = [];
    while (myArray.length) {
        results.push(myArray.splice(0, chunkSize));
    }
    return results;
}
exports.chunkArray = chunkArray;
function clone(item) {
    return JSON.parse(JSON.stringify(item));
}
exports.clone = clone;
function cleanAuthHeader(authorizationHeader) {
    let token = authorizationHeader || '';
    if (token.substr(0, 'Bearer '.length) === 'Bearer ') {
        token = token.substr('Bearer '.length);
    }
    return token;
}
exports.cleanAuthHeader = cleanAuthHeader;
/**
 * Returns everything before the query with the starting and ending '/' removed
 * ex: /Patient/?name=Joe -> Patient
 */
function cleanUrlPath(urlPath) {
    let path = urlPath.split('?')[0];
    if (path[0] === '/') {
        path = path.substr(1);
    }
    if (path[path.length - 1] === '/') {
        path = path.substring(0, path.length - 1);
    }
    return path;
}
function getRequestInformation(verb, urlPath) {
    const path = cleanUrlPath(urlPath);
    const urlSplit = path.split('/');
    switch (verb) {
        case 'PUT': {
            return {
                operation: 'update',
                resourceType: urlSplit[0],
                id: urlSplit[1],
            };
        }
        case 'PATCH': {
            return {
                operation: 'patch',
                resourceType: urlSplit[0],
                id: urlSplit[1],
            };
        }
        case 'DELETE': {
            return {
                operation: 'delete',
                resourceType: urlSplit[0],
                id: urlSplit[1],
            };
        }
        case 'GET': {
            if (urlSplit[urlSplit.length - 1].startsWith('_history')) {
                // if the last section of the url string starts with history
                if (urlSplit[0].startsWith('_history')) {
                    // '_history' is at root or url
                    return { operation: 'history-system' };
                }
                if (urlSplit[1].startsWith('_history')) {
                    return { operation: 'history-type', resourceType: urlSplit[0] };
                }
                return { operation: 'history-instance', resourceType: urlSplit[0], id: urlSplit[1] };
            }
            if (path.includes('_history/'))
                return { operation: 'vread', resourceType: urlSplit[0], id: urlSplit[1], vid: urlSplit[3] };
            // For a generic read it has to be [type]/[id]
            if (urlSplit.length === 2)
                return { operation: 'read', resourceType: urlSplit[0], id: urlSplit[1] };
            if (path.includes('metadata'))
                return { operation: 'read', resourceType: 'metadata' };
            if (path.length === 0)
                return { operation: 'search-system' };
            return { operation: 'search-type', resourceType: urlSplit[0] };
        }
        case 'POST': {
            if (path.includes('_search')) {
                if (urlSplit[0] === '_search') {
                    return { operation: 'search-system' };
                }
                return { operation: 'search-type', resourceType: urlSplit[0] };
            }
            if (path.length === 0)
                return { operation: 'transaction' };
            return { operation: 'create', resourceType: urlSplit[0] };
        }
        default: {
            throw new Error('Unable to parse the http verb');
        }
    }
}
exports.getRequestInformation = getRequestInformation;
//# sourceMappingURL=utilities.js.map