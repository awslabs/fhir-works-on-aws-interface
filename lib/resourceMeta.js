"use strict";
/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMeta = void 0;
function generateMeta(vid, lastUpdatedDate = new Date()) {
    const meta = {
        versionId: vid,
        lastUpdated: lastUpdatedDate.toISOString(),
    };
    return meta;
}
exports.generateMeta = generateMeta;
//# sourceMappingURL=resourceMeta.js.map