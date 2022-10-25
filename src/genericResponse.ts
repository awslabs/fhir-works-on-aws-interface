/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

export interface GenericResponse {
    readonly message: string;
    readonly resource?: any;
    readonly recreate?: boolean; // indicates if an 'update' operation is a recreate of a deleted resource instance
}
