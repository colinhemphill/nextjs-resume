# Next.js and Tailwind Résumé

A résumé built especially with software professionals in mind. Impress your potential employer with a beautiful and incredibly fast résumé website, or generate a PDF for email and print.

[See an example](https://nextjs-resume-generator.vercel.app/)

Your résumé can also generate a secure URL that will display information not accessible on the public URL. The secure version can include private information such as email, phone number, and mailing address. You can send the private link to a potential employer or use it to generate a more complete PDF for yourself.

## Features

- Update your résumé with simple Markdown files
  - Integration with external headless CMS systems is possible by integrating a custom fetcher
- Beautiful and accessible web app to view your résumé, link on social media, and send to potential employers
- Generate a PDF on demand to view, download, or print
- Use a secret link to generate the résumé with additional private information
- Easily customizable
  - 19 accent color palettes out-of-the-box
  - 6 neutral color palettes out-of-the-box
  - Automatic light and dark modes for each palette
  - Tailwind styling for making it your own
  - Create custom color palettes
- Dynamic OG share images in light or dark mode

## Technology

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [React-pdf](https://react-pdf.org/)
- [Marked](https://marked.js.org/)
- [Front Matter](https://frontmatter.codes/docs/markdown)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI Colors](https://www.radix-ui.com/colors)
- [Vercel OG Image Generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Vercel](https://vercel.com/)

### It's FAST

Your résumé will use the latest Vercel technology including Next.js 13 server components and edge functions, and will load fast even on older devices and poor network conditions.

## How To Use This Project

The project requires only a few steps to set up your custom config, add content to the internal CMS, and deploy to Vercel!

### Clone and Deploy

It may seem counter-intuitive, but the simplest way to get started is to clone and deploy in one step. Afterwards, you can edit the CMS and template to match your needs.

The project is designed to be deployed with [Vercel](https://vercel.com). By clicking the "Deploy" button below, you will clone the project to your own repository and deploy to a free HTTPS domain with Vercel's high-performance edge network. The default project will include mock data that you can edit in the next step!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcolinhemphill%2Fnextjs-resume&env=PRIVATE_KEY&envDescription=Environment%20variables%20needed%20to%20run%20the%20application%20and%20provide%20private%20information%20links&envLink=https%3A%2F%2Fgithub.com%2Fcolinhemphill%2Fnextjs-resume%23environment-variables&project-name=nextjs-resume&repo-name=nextjs-resume&demo-title=Next.js%20R%C3%A9sum%C3%A9&demo-description=An%20example%20Next.js%20static%20r%C3%A9sum%C3%A9)

### Modify Custom Config

Clone the project you just created to your local machine. Open it in your favorite editor, and open up the `edit-me/config/` folder at the root. Here you will find a couple of placeholder images that you can swap out if you want. You can also edit the `manifest.json` and `resumeConfig.ts` to meet your needs. The config file contains the following constants that will be used throughout the project (these are typed to provide appropriate autocomplete and error checking):

- `accentColor`: `string`. The name of an accent palette from [Radix UI Colors](https://www.radix-ui.com/docs/colors/palette-composition/the-scales#colors). If using a standard color, the contrasting text color will be white, and if using a bright color, the contrasting text color will be black.
- `neutralColor`: `string`. The name of a neutral palette from [Radix UI Grays](https://www.radix-ui.com/docs/colors/palette-composition/the-scales#grays).
- `ogImageTheme`: `'light' | 'dark'`. Your OG share image will generate either a light or a dark variant.

### Color Palette Examples

The résumé generator provides 19 accent color palettes and 6 neutral color palettes out-of-the-box. Below are screenshots from a few variations in both light and dark mode.

| Light Mode                                                                          | Dark Mode                                                                         |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **BLUE/MAUVE** ![Blue accent light mode](/docs/screenshots/Blue-LightMode.png)      | **BLUE/MAUVE** ![Blue accent dark mode](/docs/screenshots/Blue-DarkMode.png)      |
| **TOMATO/GRAY** ![Tomato accent light mode](/docs/screenshots/Tomato-LightMode.png) | **TOMATO/GRAY** ![Tomato accent dark mode](/docs/screenshots/Tomato-DarkMode.png) |
| **MINT/MAUVE** ![Mint accent light mode](/docs/screenshots/Mint-LightMode.png)      | **MINT/MAUVE** ![Mint accent dark mode](/docs/screenshots/Mint-DarkMode.png)      |

### OG Image Examples

Your accent, neutral, and color scheme preferences also apply to the generated OG image.

| Light Mode                                                                     | Dark Mode                                                                       |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| **BLUE/MAUVE** ![Blue accent light mode OG image](/docs/og/Blue-LightMode.png) | **BLUE/MAUVE** ![Blue accent dark mode share image](/docs/og/Blue-DarkMode.png) |

### Set Up Your CMS

Next, modify the mock CMS data that is included in `edit-me/cms/`. Each Markdown file uses Front Matter fields that are used to add attributes to the item. These attributes are type safe, so the project won't run if required fields are missing or invalid. The rest of the Markdown file will be rendered as HTML to provide a description of the item.

Although the mock files should be pretty self-explanatory, you can view the [CMS setup document](README-CMS.md) for detailed descriptions of required and optional fields.

### Environment Variables

Regardless of where the app is deployed, it may need access to the following environment variables:

- `PRIVATE_KEY` (optional): this is a code, determined by the author, which will provide URL access to a version of the résumé that includes private information. We recommend generating this code (e.g. a UUID or using a password generator)

## Private Link

Your project can be configured to provide a secret URL that will display more information than the public URL. This is helpful if you want to send a complete résumé to a potential employer, or if you want to generate a PDF for your own use. In this version, you can include personal information such as email, phone number, and address that you don't want visible to the general public.

### Setup

The private URL will only work if you added a `PRIVATE_KEY` environment variable. If working locally, you can add this in a `.env.local` file:

```
PRIVATE_KEY=your-private-key
```

You can then visit `https://your-url.com/private/your-private-key` to see the private version of the résumé.

### Adding Private Content

For the built-in Markdown integration, please note that you **must be sure to not commit the private information to a public Git repo**. Only use this feature in a private repo, and even then _please be aware_ of the security concerns around commiting private information to any Git repo.

To add private data to the CMS, simply add it to the `privateFields` folder.

- `cms/privateFields/`. Add as many private contact information fields as you want to display. They will appear in the order they are arranged in the folder, so you can use a number prefix to order them.
  - `label`: **required string**. The label of the field, such as "Email" or "Address".

### Security

This private URL is _only as secure as the people you send it to_. To invalidate an old private URL, you simply need to change the `PRIVATE_KEY` environment variable.

## Design and Customizations

The template is built to be responsive, beautiful, and accessible right out of the box. It supports automatic dark/light mode themeing in the web version, and a great single-page print layout in the PDF version. The project supports a minimal set of configurations such as accent colors, but if you're a front end developer or designer, you can easily open up the source code and customize it however you see fit.

If you really want to go deep on customization, you can create your own themes in the `src/tokens` folder to add custom accent and neutral palettes. You also have full control of the Tailwind configuration in the root folder `tailwind.config.js` file.

We use [Vercel OG Image Generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) to generate dynamic Open Graph (Facebook/Twitter) share images. You can edit the layout, styles, and text of OG Image using Tailwind classes in `src/pages/api/og.tsx`.

This dynamic share image will use your custom `accentColor` setting, as well as data from the CMS.
