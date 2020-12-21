# Changelog

All notable changes to this project will be documented in this file.

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
