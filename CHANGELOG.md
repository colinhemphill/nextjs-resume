# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2020-12-19

### Added

- Test configuration using Jest and Testing Library
- Snapshot tests for the index page using each CMS integration

### Changed

- Uses a new `NEXT_PUBLIC_CMS_INTEGRATION` env variable to determine selected integration
- Change the way that cms functions are exported to support a global integration setting

## [0.4.2] - 2020-12-18

### Added

- Correct configuration for bundle analyzer

### Fixed

- Use correct article adjective for job title

## [0.4.1] - 2020-12-18

### Fixed

- Missing "Hobbies & Interests" section from PDF export

## [0.4.0] - 2020-12-18

### Added

- Support for Contentful

## [0.3.1] - 2020-12-17

### Fixed

- CMS links were not being displayed on the main page footer

### Changed

- Dependency updates

## [0.3.0] - 2020-12-14

### Added

- Generated Open Graph and Twitter Card data in the document `<head>`
- The `personal_information` schema can take a `twitter_username` to include in Twitter Card data

### Removed

- Author's personal information from the default `manifest.json`

## [0.2.0] - 2020-12-14

### Added

- Extensive documentation for how to use the project

### Changed

- Revamped the PDF generator to a single-page two-column layout
- Dependency updates

## [0.1.0] - 2020-12-04

### Added

- Initial project publish
- Supports Prismic

[unreleased]: https://github.com/colinhemphill/nextjs-resume-generator/compare/1.0.0...HEAD
[0.4.3]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.4.3
[0.4.2]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.4.2
[0.4.1]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.4.1
[0.4.0]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.4.0
[0.3.1]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.3.1
[0.3.0]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.3.0
[0.2.0]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.2.0
[0.1.0]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.1.0
