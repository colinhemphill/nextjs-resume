# Next.js Static Generated Résumés

A bootstrapped Next.js application designed built especially with software professionals in mind.

[See an example](https://nextjs-resume-generator.vercel.app/)

Your résumé can also generate a secure URL that will display information not accessible on the public URL. The secure version can include private information such as email, phone number, and mailing address. You can send the private link to a potential employer or use it to generate a more complete PDF for yourself.

## Technology

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vanilla Extract](https://vanilla-extract.style/)
- [Font Awesome 6](https://fontawesome.com/)
- [React-pdf](https://react-pdf.org/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Vercel](https://vercel.com/)

![Screenshot of the application's Lighthouse score showing a 99 in "Performance", a 100 in "Accessibility", a 100 in "Best Practices", a 100 in "SEO", and that "Progressive Web App" is active.](lighthouse.png)

## How To Use This Project

The majority of the work you will need to complete is setting up and modifying your preferred headless CMS.

### Modify Custom Config

TODO

### Set Up Your CMS

TODO

### Deploy Your Résumé

The project is designed to be deployed with [Vercel](https://vercel.com), and you can easily clone the project, set up required environment variables, and deploy instantly with just a couple of clicks! Shipping this project on Vercel enables continuous deployment, their high-performance edge network, and an HTTPS domain for free. A deployment on a different service may require some adjustments to the project.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fcolinhemphill%2Fnextjs-resume&env=NEXT_PUBLIC_CMS_INTEGRATION,CMS_ENDPOINT,CMS_KEY&envDescription=The%20CMS%20integration%20details%20required%20to%20connect%20your%20r%C3%A9sum%C3%A9%20to%20a%20supported%20headless%20CMS.&project-name=nextjs-resume&repo-name=nextjs-resume&demo-title=Colin%20Hemphill's%20R%C3%A9sum%C3%A9&demo-description=A%20statically%20generated%20professional%20r%C3%A9sum%C3%A9.&demo-url=https%3A%2F%2Fresume.colinhemphill.com&demo-image=http%3A%2F%2Fresume.colinhemphill.com%2Fimg%2FColinHemphill-Logo-SocialShare.png)

#### Environment Variables

Regardless of where the app is deployed, it will need access to the following environment variables:

- `PRIVATE_KEY` (optional): this is a code, determined by the author, which will provide URL access to a version of the résumé that includes private information. We recommend generating this code (e.g. a UUID or using a password generator)

## Private Link

If you include a `PRIVATE_KEY` environment variable in your project, you have access to a secret URL that will display more information than the public URL. Just visit `https://your-url.com/private/your-private-key` to see the private résumé! The private version will include any `private_information` items that you added to the CMS. This is helpful if you want to send a complete résumé to a potential employer or if you want to generate a PDF for your own use. In this version, you can include personal information such as email, phone number, and address that you don't want visible to the general public.

This private URL is _only as secure as the people you send it to_. To invalidate an old private URL, you simply need to change the `PRIVATE_KEY` environment variable.
