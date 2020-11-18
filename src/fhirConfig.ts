/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import { Authorization } from './authorization';
import { Bundle } from './bundle';
import { BulkDataAccess } from './bulkDataAccess';
import { ConfigVersion, FhirVersion, R4Resource, STU3Resource, SystemOperation, TypeOperation } from './constants';
import { History } from './history';
import { Persistence } from './persistence';
import { Search } from './search';

/**
 * http://www.hl7.org/fhir/smart-app-launch/conformance/index.html#using-cs
 */
export interface OAuthStrategy {
    authorizationEndpoint: string;
    tokenEndpoint: string;
    introspectionEndpoint?: string;
    revocationEndpoint?: string;
    registrationEndpoint?: string;
    managementEndpoint?: string;
}

/**
 * http://www.hl7.org/fhir/smart-app-launch/conformance/index.html#using-well-known
 */
export interface SmartStrategy extends OAuthStrategy {
    capabilities: string[];
    scopesSupported?: string[];
    responseTypesSupported?: string[];
    tokenEndpointAuthMethodsSupported?: tokenEndpointAuthMethod[];
}

export type tokenEndpointAuthMethod = 'client_secret_basic' | 'client_secret_post';

export interface Strategy {
    oauth?: OAuthStrategy;
    smart?: SmartStrategy;
    /**
     * https://www.hl7.org/fhir/codesystem-restful-security-service.html
     */
    service?: 'OAuth' | 'SMART-on-FHIR' | 'NTLM' | 'Basic' | 'Kerberos' | 'Certificates';
}

export interface Auth {
    strategy: Strategy;
    authorization: Authorization;
}

export interface Server {
    url: string;
}

export interface Logging {
    level: 'debug' | 'info' | 'warn' | 'error';
}

export interface GenericResource extends Resource {
    excludedR4Resources?: R4Resource[];
    excludedSTU3Resources?: STU3Resource[];
}

export interface Resource {
    operations: TypeOperation[];
    fhirVersions: FhirVersion[];
    persistence: Persistence;
    typeHistory: History;
    typeSearch: Search;
}

export interface Resources {
    [resourceName: string]: Resource;
}

export interface Profile {
    fhirVersion: FhirVersion;
    systemOperations: SystemOperation[];
    systemSearch: Search;
    systemHistory: History;
    bundle: Bundle;
    bulkDataAccess?: BulkDataAccess;
    genericResource?: GenericResource;
    resources?: Resources;
}

export interface FhirConfig {
    orgName: string;
    configVersion: ConfigVersion;
    auth: Auth;
    server: Server;
    logging: Logging;
    profile: Profile;
}
