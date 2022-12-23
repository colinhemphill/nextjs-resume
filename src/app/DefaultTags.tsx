import { headers } from 'next/headers';
import resumeConfig from '../../edit-me/config/resumeConfig';
import { getCMSIntegration } from '../cms-integration/getCMSIntegration';
import { getFullName } from '../helpers/utils';
import accents from '../tokens/accents';

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
      <meta
        name="theme-color"
        content={accents[resumeConfig.accentColor].light[10]}
      />

      <meta property="og:site_name" content="Professional Résumé" />
      <meta property="og:url" content={baseURL} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />

      <meta name="image" content={ogImage} />
      <meta itemProp="image" content={ogImage} />
    </>
  );
};

export default DefaultTags;
