import { headers } from 'next/headers';
import { protocol, vercelURL } from 'src/helpers/env';

export default async function sitemap() {
  const host = headers().get('host');
  const baseURL = `${protocol}://${host || vercelURL}`;

  return [
    {
      url: baseURL,
      lastModified: new Date().toISOString(),
    },
  ];
}
