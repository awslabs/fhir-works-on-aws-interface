/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import {PartialCapabilityStatement} from "./capabilities";

export interface GenericResponse {
    readonly message: string;
    readonly resource?: any;
}

export interface ResourceCapabilityStatement extends PartialCapabilityStatement {
    [resourceType: string]: ResourceCapability;
}

export interface ResourceCapability {
    type: string;
    supportedProfile: string[];
}
