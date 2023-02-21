# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.3] - 2023-02-21

### Changed

- Dependency upgrades
-

## [3.0.2] - 2022-12-31

### Changed

- Dependency upgrades

## [3.0.1] - 2022-12-31

### Changed

- Dependency upgrades

## [3.0.0] - 2022-12-23

### Added

- [Vercel OG Image](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) generator integration

### Changed

- Newly designed web layout
- Migrated to Next.js 13 server component layouts
- Migrated to [Tailwind CSS](https://tailwindcss.com/)
- Renamed "Education" to "Achievements" to cover more general uses

## [2.0.6] - 2022-08-04

### Changed

- Dependency updates

## [2.0.5] - 2022-08-02

### Changed

- Dependency updates
- Default to `display=swap` for loading Google fonts

## [2.0.4] - 2022-06-11

### Changed

- Dependency updates

### Removed

- Replace `dessert-box` with custom component

## [2.0.3] - 2022-05-13

### Added

- Jest config
  - Next work will be to start filling in tests

### Changed

- Upgrade to React 18
- Dependency updates

## [2.0.2] - 2022-03-21

### Fixed

- `/private` now passes the `hobbies`, `links`, and `privateInformation` fields that are required by child components
- `/private` will now pass the secret key to the PDF link
- PDF generator can now receive a `secret` query param to correctly list private fields

## [2.0.1] - 2022-02-26

### Added

- Added `copyfiles` command to commit hook

## [2.0.0] - 2022-02-26

### Added

- Uses [Vanilla Extract](https://vanilla-extract.style/) for styles
- Uses custom Vanilla Extract styles and components based on an early version of the Strum Design System
- Non-PDF styles now support dark mode
- Defaults to a Markdown integration as the CMS
  - Files in the project pull data for the résumé
  - Requires a code change to edit the résumé
- Uses [OG Impact](https://ogimpact.sh/) to dynamically generate OG share images

### Removed

- Contentful and Prismic integrations are no longer supported
  - With this project rewrite, we may be adding CMS integrations as extra modules over time
- No longer uses Sass or Sass modules
- No longer uses Bootstrap

### Changed

- Upgraded to Next.js 12.1
  - Use built-in ESLint config
  - Use built-in Jest config
- Switched to [React-pdf](https://react-pdf.org/) for client-side PDF generation instead of Puppeteer for serverless PDF generation
- Switched to "Source Sans Pro" as the default font

## [1.1.6] - 2021-12-26

- Upgraded to Next.js 12

## [1.1.5] - 2021-06-21

### Changed

- Upgraded to Next.js 11

## [1.1.4] - 2021-05-14

### Changed

- Dependency updates

### Fixed

- Set up Husky hooks with lint-staged to work properly with Husky 6.x

## [1.1.3] - 2021-04-19

### Changed

- Dependency updates

## [1.1.2] - 2021-02-22

### Changed

- Dependency updates
  - Updated ESLint config to work with `eslint-config-prettier@8.0.0`
- Opt in to `webpack5` option in `next.config.js`

## [1.1.1] - 2021-02-19

### Changed

- Dependency updates
- Switched from `next-offline` to `next-pwa`

### Fixed

- Incorrect bundle analyzer config

## [1.1.0] - 2020-12-21

### Added

- Supports new optional `private_information` schema type
- Supports new optional environment variable `PRIVATE_KEY`
- New pages at `/pages/private/[secret]` and `/pages/private/[secret]/pdf`
  - New pages require a `secret` slug that is compared to the `PRIVATE_KEY` value and returns a 401 on mismatch
  - New pages display `private_information` values from the CMS under "Contact Information" section
  - Clicking "Download PDF" button from this page also sends the secret via query to the API to validate access

### Changed

- Upgraded to Bootstrap 5.x beta
  - Reworked many styles after the upgrade, particularly with the PDF layout
- List contact information in columns to maintain equal spacing
- Update `robots.txt` to disallow PDF layout and all private pages
- Reduced opacity delta on star ratings

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
[1.1.5]: https://github.com/colinhemphill/nextjs-resume-generator/tags/1.1.5
[1.1.4]: https://github.com/colinhemphill/nextjs-resume-generator/tags/1.1.4
[1.1.3]: https://github.com/colinhemphill/nextjs-resume-generator/tags/1.1.3
[1.1.2]: https://github.com/colinhemphill/nextjs-resume-generator/tags/1.1.2
[1.1.1]: https://github.com/colinhemphill/nextjs-resume-generator/tags/1.1.1
[1.1.0]: https://github.com/colinhemphill/nextjs-resume-generator/tags/1.1.0
[1.0.0]: https://github.com/colinhemphill/nextjs-resume-generator/tags/1.0.0
[0.4.3]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.4.3
[0.4.2]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.4.2
[0.4.1]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.4.1
[0.4.0]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.4.0
[0.3.1]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.3.1
[0.3.0]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.3.0
[0.2.0]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.2.0
[0.1.0]: https://github.com/colinhemphill/nextjs-resume-generator/tags/0.1.0
