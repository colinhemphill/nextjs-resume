export const deployURL =
  process.env.DEPLOY_URL ??
  process.env.URL ??
  process.env.NEXT_PUBLIC_VERCEL_URL;
export const development = process.env.NODE_ENV === 'development';
export const protocol = development ? 'http' : 'https';
