const baseUrl = `https://${
  process.env.NEXT_PUBLIC_VERCEL_URL ?? 'localhost:3000'
}`;

export default async function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
  ];
}
