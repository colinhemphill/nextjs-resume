import { deployURL } from '@src/helpers/environment';
import { MetadataRoute } from 'next';

const baseURL = `https://${deployURL ?? ''}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date().toISOString(),
    },
  ];
}
