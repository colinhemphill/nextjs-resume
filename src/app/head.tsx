import { getFullName } from '../helpers/utils';
import DefaultTags from './DefaultTags';
import { getCMSData } from './layout';

const Head = async () => {
  const data = await getCMSData();
  const fullName = getFullName(data.personalInformation);
  const title = `Résumé | ${fullName} | ${data.personalInformation.attributes.location}`;
  const description = `Professional résumé for ${fullName}.`;

  return (
    <>
      <DefaultTags />
      <meta name="description" content={description} />

      <title>{title}</title>
    </>
  );
};

export default Head;
