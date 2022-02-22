import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { CMSPersonalInformation } from '../cms-integration/markdown/personal';
import { getFullName } from '../helpers/utils';

interface PageHeadProps {
  baseURL?: string;
  description: string;
  personalInformation: CMSPersonalInformation;
  title: string;
}

const PageHead: React.FC<PageHeadProps> = (props) => {
  const {
    baseURL = typeof window !== 'undefined' ? window.location.origin : '',
    description,
    personalInformation,
    title,
  } = props;
  const { pathname } = useRouter();

  const fullName = getFullName(personalInformation);
  const url = baseURL + pathname;
  const imgPath = baseURL + '/img/icons/favicon-512.png';

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
      <meta property="og:image" content={imgPath} />
      <meta
        property="profile:first_name"
        content={personalInformation.attributes.givenName}
      />
      <meta
        property="profile:last_name"
        content={personalInformation.attributes.familyName}
      />

      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:site"
        content={`@${personalInformation.attributes.twitterUsername}`}
      />
      <meta
        name="twitter:creator"
        content={`@${personalInformation.attributes.twitterUsername}`}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgPath} />
    </Head>
  );
};

export default PageHead;
