import { MetadataRoute } from 'next';
import { vercelURL } from 'src/helpers/env';

const baseURL = `https://${vercelURL}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date().toISOString(),
    },
  ];
}
