import { headers } from 'next/headers';
import resumeConfig from '../../edit-me/config/resumeConfig';
import { getCMSIntegration } from '../cms-integration/getCMSIntegration';
import { getFullName } from '../helpers/utils';

const vercelURL = process.env.NEXT_PUBLIC_VERCEL_URL;
const dev = process.env.NODE_ENV === 'development';
const protocol = dev ? 'http' : 'https';

// @ts-expect-error Server Component
const DefaultTags: React.FC = async () => {
  const host = headers().get('host');
  const baseURL = `${protocol}://${vercelURL || host}`;
  const data = await getCMSIntegration('markdown');
  const fullName = getFullName(data.personalInformation);
  const ogImage = `${baseURL}/api/og?name=${encodeURIComponent(
    fullName,
  )}&theme=${resumeConfig.ogImageTheme}`;

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:image" content={ogImage} />
    </>
  );
};

export default DefaultTags;
