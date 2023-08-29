# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.2.1] - 2023-08-29

### Changed

- Removed `opentelemetry` resolutions
  - The conflict seems to be resolved in Next.js `13.4.19`

## [4.2.0] - 2023-08-22

### Added

- With [Radix Colors 2.1.0](https://www.radix-ui.com/colors/docs/overview/releases#210) you can now use `ruby`, `iris`, and `jade` as your accent color

### Changed

- Dependency upgrades

## [4.1.2] - 2023-08-14

### Changed

- Dependency upgrades

### Fixed

- Export sorted copies of `allProfessionalExperiences` and `allAchievements` to match order in the CMS folder

## [4.1.1] - 2023-08-11

### Added

- Use [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths) to resolve paths from tests automatically

### Changed

- Dependency upgrades
  - **WARNING:** this upgrades [Radix UI Colors to 2.0.x](https://www.radix-ui.com/colors/docs/overview/releases#200) which may change the way your color choices look

## [4.1.0] - 2023-07-14

### Changed

- Switched to `"type": "module"` in `package.json`
- Migrated some config files to ESM
- Dependency upgrades
  - Prettier 3.0

## [4.0.5] - 2023-07-11

### Changed

- Dependency upgrades

### Fixed

- Temporarily added dependency overrides to address the [existing issue](https://github.com/contentlayerdev/contentlayer/issues/506) with Contentlayer

## [4.0.4] - 2023-06-04

### Changed

- Dependency upgrades

## [4.0.3] - 2023-05-30

### Changed

- Dependency upgrades

## [4.0.2] - 2023-05-03

### Changed

- Dependency upgrades

## [4.0.1] - 2023-04-14

### Added

- New unit tests

### Fixed

- Inconsistent TS error due to exports in `layout.tsx`

## [4.0.0] - 2023-04-12

**Migration**

[v3 to v4 Migration Guide](/docs/migration/v3-v4.md)

### Added

- Contentlayer integration for typing and reading the Markdown CMS

### Changed

- Switch from Jest to Vitest
- Renamed `cms` folder to `content`
- Changed `hobbies` file to `additionalInfo`
  - Added a `title` field to the `additionalInfo` content file
- Changed `institution` to `organization` for `achievement` type
- Switch `clsx` to `twMerge`
- Use Class Variance Authority for some components
- Use `opengraph-image` named route handler instead of custom API route

## [3.5.0] - 2023-04-07

### Added

- `resumeConfig.appTheme` property
  - If set to `ThemeSetting.System`, Tailwind will use `media` mode to set the color theme
  - If set to `ThemeSetting.Light` or `ThemeSetting.Dark`, Tailwind will use the `class` mode to set the color scheme
  - The app layout applies the `dark` class if `resumeConfig.appTheme` is set to `ThemeSetting.Dark`
- `resumeConfig.pdfTheme` property
  - Will set the color theme only for a generated PDF
  - Can be set independently of the app theme
  - Defaults to `Theme.Light` for printing purposes

### Changed

- All PDF icons use the color helper functions

## [3.4.0] - 2023-04-07

### Added

- Helper functions for getting Radix colors based on a requested shade and your `resumeConfig` settings
- Generate app icons using the new [image generation](https://beta.nextjs.org/docs/optimizing/image-generation) and [file-based metadata](https://beta.nextjs.org/docs/api-reference/metadata#file-based-metadata) features
- Add a file-based metadata route for generating a sitemap

### Changed

- Dependency upgrades, including [Next.js 13.3](https://nextjs.org/blog/next-13-3)
- The `ogImageTheme` setting in `resumeConfig.ts` is now called `imageTheme` since it also applies to icon generation
  - It also uses a `Theme` enum instead of a plain string now
- Minor styling adjustments

### Removed

- All manually created static images used for icons and favicons

## [3.3.1] - 2023-04-06

### Changed

- Migrated the OG generator from `/pages/api/og.tsx` to a route handler at `/app/api/og/route.tsx`
  - This is a non-breaking change from the perspective of using the API, but if you've already modified your OG generator to customize the styles or content, you'll want to make those changes in the route handler now

## [3.3.0] - 2023-04-06

### Added

- Styles for inline `code` blocks

### Changed

- Dependency upgrades
- Rewrote Tailwind config in TypeScript (a [Tailwind 3.3 feature](https://tailwindcss.com/blog/tailwindcss-v3-3))
- Use [windy-radix-palette](https://github.com/brattonross/windy-radix-palette) to manage colors, with a few personal touches
  - Supports automatic dark mode, so I was able to remove most `dark:` prefixes
  - Supports semantic color names so I am able to keep the `neutral` and `accent` conventions
  - Adds an `accentContrast` color name to determine the appropriate contrasting color for configured accent color (Radix "bright" colors like "sky" and "mint" require black foreground text)
- `resumeConfig` is now a TypeScript file
- `resumeConfig` now uses enums for the `accentColor` and `neutralColor` properties
  - e.g. `accentColor: AccentColors.Blue`
- Swap "Roboto Mono" for "JetBrains Mono" as the default monospace font

### Removed

- Tailwind Typography plugin and `prose` classes
  - Now uses a few custom styles that are easier to control and match to the rest of the document

## [3.2.1] - 2023-03-02

### Changed

- Dependency upgrades

### Removed

- Bundle analyzer plugin

## [3.2.0] - 2023-02-24

### Added

- Wrap `getCMSIntegration` in a React `cache` since it doesn't use `fetch` internally

### Changed

- Use the new [Metadata API](https://beta.nextjs.org/docs/api-reference/metadata) to replace `head.tsx` and `DefaultTags.tsx`

### Removed

- `@next/font` is now removed and replaced with the built-in `next/font`

## [3.1.0] - 2023-02-22

### Added

- PDF rendering now supports emojis
  - Requires connection to Twemoji at runtime
- Loads a monospace font in case you need to support code samples
  - Use the `font-mono` Tailwind class anywhere you want monospace

### Changed

- Dependency upgrades
- Default to Albert Sans as the PDF font to match the web look and feel
  - Adjust font sizes accordingly
- Don't hyphenate paragraphs in PDF
- Switch to rendering SVG components for PDF icons instead of raster images
- Use the `notFound` function to generate an error if private key doesn't match
  - Newer version of Next is able to prebuild the page correctly now
- Improved error page for incorrect private key

### Fixed

- Improved rendering of ordered and unordered lists in PDF
  - Thanks to [justin-hackin](https://github.com/justin-hackin) for the find and custom renderer function
- Minor flexbox improvements
  - Switch to percentage layout of sidebar and main content on PDF instead of basing it on inches
- Text selection colors correctly match the chosen theme

## [3.0.3] - 2023-02-21

### Changed

- Dependency upgrades

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
