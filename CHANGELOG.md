# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [12.1.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v12.0.0...v12.1.0) (2022-04-05)


### Features

* add support for Batch Bundle ([#102](https://github.com/awslabs/fhir-works-on-aws-interface/issues/102)) ([f77720b](https://github.com/awslabs/fhir-works-on-aws-interface/commit/f77720b6d039138830d7d8d665608ffbf235a04e))

## [12.0.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v11.3.0...v12.0.0) (2022-03-03)


### ⚠ BREAKING CHANGES

* add new required methods `getActiveSubscriptions` and `validateSubscriptionSearchCriteria`

### Features

* add methods to support FHIR Subscriptions ([#100](https://github.com/awslabs/fhir-works-on-aws-interface/issues/100)) ([a980196](https://github.com/awslabs/fhir-works-on-aws-interface/commit/a980196b6ff153efc816d8e35353118169757d68)), closes [#95](https://github.com/awslabs/fhir-works-on-aws-interface/issues/95) [#94](https://github.com/awslabs/fhir-works-on-aws-interface/issues/94) [#97](https://github.com/awslabs/fhir-works-on-aws-interface/issues/97)


## [11.3.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v11.2.0...v11.3.0) (2021-10-27)


### Features

* add sessionId to search requests ([#87](https://github.com/awslabs/fhir-works-on-aws-interface/issues/87)) ([6284d53](https://github.com/awslabs/fhir-works-on-aws-interface/commit/6284d53bb44d6180b2d6304e42ba06aa9f5596cb))

## [11.2.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v11.1.0...v11.2.0) (2021-10-13)


### Features

* add requiresAccessToken to GetExportStatusResponse ([#85](https://github.com/awslabs/fhir-works-on-aws-interface/issues/85)) ([a9ad12c](https://github.com/awslabs/fhir-works-on-aws-interface/commit/a9ad12c8401952a47a2fafd2a1da294dc806df18))

## [11.1.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v11.0.0...v11.1.0) (2021-08-24)


### Features

* add routing for Conflict errors ([#81](https://github.com/awslabs/fhir-works-on-aws-interface/issues/81)) ([0b135ee](https://github.com/awslabs/fhir-works-on-aws-interface/commit/0b135eed7866215149b32c0887542f72dc7dac1a))


### Bug Fixes

* updating SmartStrategy interface to spec ([#80](https://github.com/awslabs/fhir-works-on-aws-interface/issues/80)) ([50b0a7e](https://github.com/awslabs/fhir-works-on-aws-interface/commit/50b0a7e322b1b3393574620539a83d137b706820))

## [11.0.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v10.0.0...v11.0.0) (2021-08-19)


### ⚠ BREAKING CHANGES

* Removes ttlInSeconds from the persistence interface

### Bug Fixes

* add missing fhirServiceBaseUrl to AuthorizationBundleRequest ([#78](https://github.com/awslabs/fhir-works-on-aws-interface/issues/78)) ([3c56239](https://github.com/awslabs/fhir-works-on-aws-interface/commit/3c562396f54735053ea61a3f2127b079561279ff))


* Remove ttlInSeconds ([#69](https://github.com/awslabs/fhir-works-on-aws-interface/issues/69)) ([4662772](https://github.com/awslabs/fhir-works-on-aws-interface/commit/466277287d7101f9aa841550faf9afde69cc1278))

## [10.0.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v9.1.0...v10.0.0) (2021-08-12)


### ⚠ BREAKING CHANGES

* add required parameter allowedResourceTypes for group export

### Features

* add multi-tenancy and group export related fields ([#76](https://github.com/awslabs/fhir-works-on-aws-interface/issues/76)) ([65c90b1](https://github.com/awslabs/fhir-works-on-aws-interface/commit/65c90b10bf3a7de62886dc8e1f59ae0c5415cf1e)), closes [#70](https://github.com/awslabs/fhir-works-on-aws-interface/issues/70) [#71](https://github.com/awslabs/fhir-works-on-aws-interface/issues/71) [#72](https://github.com/awslabs/fhir-works-on-aws-interface/issues/72) [#73](https://github.com/awslabs/fhir-works-on-aws-interface/issues/73)

## [9.1.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v9.0.0...v9.1.0) (2021-08-05)


### Features

* Add ResourceConflictError ([#74](https://github.com/awslabs/fhir-works-on-aws-interface/issues/74)) ([fa3facc](https://github.com/awslabs/fhir-works-on-aws-interface/commit/fa3facc0b07230d15514f5aa27d422e33a1d0ae1))

## [9.0.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v8.2.0...v9.0.0) (2021-05-11)


### ⚠ BREAKING CHANGES

* Remove logging interface export 
* feat: add logger builder to be used by other FHIR components 

### Features

* Add logger builder ([#65](https://github.com/awslabs/fhir-works-on-aws-interface/issues/65)) ([aa99182](https://github.com/awslabs/fhir-works-on-aws-interface/commit/aa9918297fe3d4e5d5b81efe62c774ccc1083914))

## [8.2.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v8.1.1...v8.2.0) (2021-05-11)


### Features

* Add a request context to authorization related interfaces. ([#62](https://github.com/awslabs/fhir-works-on-aws-interface/issues/62)) ([f56ca09](https://github.com/awslabs/fhir-works-on-aws-interface/commit/f56ca091b72bc16053cfe7894bb759b486db9635))
* Resource Archive Support ([#64](https://github.com/awslabs/fhir-works-on-aws-interface/issues/64)) ([99d0593](https://github.com/awslabs/fhir-works-on-aws-interface/commit/99d05931b3bc931b356e8e74cc5fb203c96be049))

### [8.1.1](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v8.1.0...v8.1.1) (2021-04-06)


### Bug Fixes

* meta object structure & update dependencies ([#60](https://github.com/awslabs/fhir-works-on-aws-interface/issues/60)) ([de9102a](https://github.com/awslabs/fhir-works-on-aws-interface/commit/de9102a7840db148dbdc76bd2a90750d60f7a006))

## [8.1.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v8.0.1...v8.1.0) (2021-03-05)


### Features

* Add compiledImplementationGuides to FhirConfig ([#55](https://github.com/awslabs/fhir-works-on-aws-interface/issues/55)) ([4aa4347](https://github.com/awslabs/fhir-works-on-aws-interface/commit/4aa4347e31b334b05761cf10e2db89445674ce97))

### [8.0.1](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v8.0.0...v8.0.1) (2021-03-02)


### Bug Fixes

* Include ExportType for export routes ([#57](https://github.com/awslabs/fhir-works-on-aws-interface/issues/57)) ([bd518a6](https://github.com/awslabs/fhir-works-on-aws-interface/commit/bd518a6c03397ba9896972c3f2ff200e3d6f68ee))
* Update BASE_R4_RESOURCES with missing resources ([#54](https://github.com/awslabs/fhir-works-on-aws-interface/issues/54)) ([08ada00](https://github.com/awslabs/fhir-works-on-aws-interface/commit/08ada005426132377a65860e0faa9870fa6c0ad7))

## [8.0.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v7.1.0...v8.0.0) (2021-02-10)


### ⚠ BREAKING CHANGES

* This adds validators as a required attribute to FhirConfig. 

### Features

* Add validator interface ([#48](https://github.com/awslabs/fhir-works-on-aws-interface/issues/48)) ([cf497a0](https://github.com/awslabs/fhir-works-on-aws-interface/commit/cf497a0f565821effe6169df44202c02a00eef95))

## [7.1.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v7.0.1...v7.1.0) (2021-01-28)


### Features

* add implementation guides compile interface ([#44](https://github.com/awslabs/fhir-works-on-aws-interface/issues/44)) ([0b1b947](https://github.com/awslabs/fhir-works-on-aws-interface/commit/0b1b9479bc50e7e21a859bd9583fc53e6a7bdbeb))

## [7.0.1](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v7.0.0...v7.0.1) (2021-01-26)


### Bug Fixes

* Add optional parameters to GetSearchFilter ([#45](https://github.com/awslabs/fhir-works-on-aws-interface/issues/45)) ([843bab8](https://github.com/awslabs/fhir-works-on-aws-interface/commit/843bab823a7ec6b77217556d806505a677f83c7a))

## [7.0.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v6.0.1...v7.0.0) (2021-01-12)


### Features

* add getCapabilities method to Search interface ([#42](https://github.com/awslabs/fhir-works-on-aws-interface/issues/42)) ([b274566](https://github.com/awslabs/fhir-works-on-aws-interface/commit/b274566c71899a2bd7c7d9112bfd85c889678ad4))

## [6.0.1] - 2021-01-06

### Updated
* `GetSearchFilterBasedOnIdentityRequest.operation` now includes `history-instance`

## [6.0.0] - 2020-12-21

### Added
- `SearchFilter` interface to allow `fhir-works-on-aws-search` to filter search results
- `GetSearchFilterBasedOnIdentity` interface so `fhir-works-on-aws-authz` can provide `SearchFilter` that can be used for filtering search results
- `InvalidSearchParameterError`: A new error for search to throw when search parameters are invalid

## [5.0.0] - 2020-12-11

### Added
- `ProductInfo` interface to collect product and business information about the FHIR server

## [4.0.0] - 2020-11-20

### Added
- `SmartStrategy` for passing in SMART Auth configurations
- `SmartAuthorization` for class implementing SMART Auth 

### Updated
- Authorization interfaces to use `userIdentity` instead of `accessToken`
- isAuthorized renamed to verifyAccessToken
- getRequesterUserId method removed

## [3.0.0] - 2020-11-11

### Added
- Required methods for SMART on FHIR interactions
- Export UnauthorizedError to be usable
- Required interfaces and types for bulk data export

## [2.0.0] - 2020-09-25

### Added
- `getAllowedResourceTypesForOperation` method to `Authorization` interface.

### Updated
- `Authorization.isAuthorized` to return a promise.

## [1.0.0] - 2020-08-31

### Added

- Initial launch! :rocket:
