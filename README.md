# Next.js Static Generated Résumés

A bootstrapped Next.js application designed to connect your preferred headless CMS and statically generate a clean, professional, and fast web-based résumé. The generator features an API endpoint to download the résumé as a PDF.

[See an example](https://resume.colinhemphill.com)

## Technology

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/)
- [Bootstrap](https://getbootstrap.com/)
- [SASS](https://sass-lang.com/)
- [Font Awesome](https://fontawesome.com/)
- [Puppeteer](https://developers.google.com/web/tools/puppeteer)

It also features a simple, effective, and not overbearing dev workflow using ESLint, Prettier, and stylelint.

![Screenshot of the application's Lighthouse score showing a 99 in "Performance", a 100 in "Accessibility", a 100 in "Best Practices", a 100 in "SEO", and that "Progressive Web App" is active.](lighthouse.png)

## Supported Headless CMS Services

The generator currently supports the following headless CMS services:

- [Prismic](https://prismic.io/)

If you'd like support for a different service, please feel free to open a pull request! New services can be integrated by simply creating a new file in the `/lib` folder to wrap the expected API requests.

## How To Use This Project

The majority of the work you will need to complete is setting up and modifying your preferred headless CMS.

### Set Up Your CMS

Regardless of which supported CMS you choose, or if you are adding support for a new CMS, you will need to set up your schemas to match the expected items.

View our [CMS setup document](README-CMS.md) to see the schemas that you will need alongside the name and description of each required field.

### Deploy Your Résumé

The project is designed to be deployed with [Vercel](https://vercel.com), and you can easily clone the project, set up required environment variables, and deploy instantly with just a couple of clicks! Shipping this project on Vercel enables continuous deployment, their high-performance edge network, and an HTTPS domain for free. A deployment on a different service may require some adjustments to the project.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fcolinhemphill%2Fnextjs-resume-generator&env=CMS_ENDPOINT,CMS_KEY&envDescription=This%20application%20requires%20the%20API%20endpoint%20for%20your%20CMS%20integration%20as%20well%20as%20the%20access%20key%20for%20that%20CMS.&project-name=nextjs-static-resume-generator&repository-name=nextjs-static-resume-generator&demo-title=Colin%20Hemphill's%20R%C3%A9sum%C3%A9&demo-description=A%20statically%20generated%20r%C3%A9sum%C3%A9%20built%20in%20Next.js%20and%20integrated%20with%20the%20Prismic%20headless%20CMS.&demo-url=https%3A%2F%2Fresume.colinhemphill.com)

#### Environment Variables

Regardless of where the app is deployed, it will need access to the following environment variables:

- `CMS_ENDPOINT`: the API endpoint for your CMS repo
- `CMS_KEY`: a secret key that grants the app at least read access to your CMS

#### Webhooks

To maximize the workflow of your generator, an update to the CMS should trigger a fresh build of the static deployment.

If you are using Vercel, simply go to your project, then go to Settings > Git > Deploy Hooks, create a new hook, and copy the URL. Then go to your CMS webhook settings and add the URL to trigger a build when the CMS is updated.

## Customize Your Résumé

The project ships with a clean and fully WCAG compliant design, but obviously you should feel free to customize it to your personal taste. There are also a couple of places where we are not able to pull information from the CMS, so to optimize your résumé you should consider writing over these.

To modify the project locally, you will need to create a `.env.local` file at the project root with the following, using the same env variables that were required for deployment:

```shell
CMS_ENDPOINT=https://your-cms-endpoint.com/
CMS_KEY=your-secret-key
```

Then to run the project:

```shell
npm i
npm run dev
```

Global stylesheets are located at `/src/styles`, and basic color variables can be edited at `/src/styles/variables.scss`.

The page structure and PDF generating API are located at `/src/pages`, and most React components are located at `/src/components`. Each component uses SASS modules when custom styles are required, and these styles are located right next to the component.

To modify the document `<head>`, such as modifying Open Graph data or icons, you can edit `/components/PageHead.tsx`.

You should definitely consider updating _everyting_ in the `/public` folder to match your personal brand, including favicon renders in `/public/img/icons/` and `public/favicon.ico`. You should also update `/public/manifest.json` to match your site, as these cannot be updated from the integrated CMS.
