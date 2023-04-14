export const vercelURL = process.env.NEXT_PUBLIC_VERCEL_URL;
export const dev = process.env.NODE_ENV === 'development';
export const protocol = dev ? 'http' : 'https';
