/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */
/**
 * Retrieve SMART scopes that are supported by the Auth server
 * http://hl7.org/fhir/smart-app-launch/scopes-and-launch-context/index.html#quick-start
 * @return a list of scopes supported by the Auth server
 */
export interface SmartAuthorization {
    getSupportedSMARTScopes(): Promise<string[]>;
}
