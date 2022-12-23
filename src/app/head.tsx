import { getCMSIntegration } from '../cms-integration/getCMSIntegration';
import { getFullName } from '../helpers/utils';
import DefaultTags from './DefaultTags';

const Head = async () => {
  const data = await getCMSIntegration('markdown');
  const fullName = getFullName(data.personalInformation);
  const title = `Résumé | ${fullName} | ${data.personalInformation.attributes.location}`;
  const description = `Professional résumé for ${fullName}.`;

  return (
    <>
      <DefaultTags />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <title>{title}</title>
    </>
  );
};

export default Head;
