import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { CMSPersonalInformation } from '../cms-integration/markdown/personal';
import { getFullName } from '../helpers/utils';
import colors from '../strum-design-system/themes/timbre/colors';

interface PageHeadProps {
  baseURL?: string;
  description: string;
  personalInformation: CMSPersonalInformation;
  title: string;
}

const ogImgColor = `%23${colors.primary.replace('#', '')}`;

const PageHead: React.FC<PageHeadProps> = (props) => {
  const {
    baseURL = typeof window !== 'undefined' ? window.location.origin : '',
    description,
    personalInformation,
    title,
  } = props;
  const { pathname } = useRouter();

  const fullName = getFullName(personalInformation);
  const ogImgTitle = encodeURI(
    `**${fullName.toUpperCase()}** ${personalInformation.attributes.location.toUpperCase()}`,
  );
  const ogImg = `https://ogi.sh/gzzIXzt5-?title=${ogImgTitle}&backgroundColor=${ogImgColor}`;
  const url = baseURL + pathname;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta
        property="og:site_name"
        content={`Professional Résumé for ${fullName}`}
      />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="profile" />
      <meta
        property="profile:first_name"
        content={personalInformation.attributes.givenName}
      />
      <meta
        property="profile:last_name"
        content={personalInformation.attributes.familyName}
      />

      <meta name="twitter:card" content="summary" />
      {personalInformation.attributes.twitterUsername && (
        <>
          <meta
            name="twitter:site"
            content={`@${personalInformation.attributes.twitterUsername}`}
          />
          <meta
            name="twitter:creator"
            content={`@${personalInformation.attributes.twitterUsername}`}
          />
        </>
      )}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Share images served from https://ogimpact.sh/ */}
      <meta property="og:image" content={ogImg} />
      <meta name="image" content={ogImg} />
      <meta itemProp="image" content={ogImg} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImg} />
    </Head>
  );
};

export default PageHead;
