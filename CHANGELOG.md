# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [7.1.0](https://github.com/awslabs/fhir-works-on-aws-interface/compare/v6.0.1...v7.1.0) (2021-01-26)


### Features

* add getCapabilities method to Search interface ([#42](https://github.com/awslabs/fhir-works-on-aws-interface/issues/42)) ([b274566](https://github.com/awslabs/fhir-works-on-aws-interface/commit/b274566c71899a2bd7c7d9112bfd85c889678ad4))


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
