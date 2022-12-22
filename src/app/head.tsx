import { getFullName } from '../helpers/utils';
import DefaultTags from './DefaultTags';
import { getCMSData } from './layout';

const Head = async () => {
  const data = await getCMSData();
  const title = `Résumé | ${getFullName(data.personalInformation)} | ${
    data.personalInformation.attributes.location
  }`;

  return (
    <>
      <DefaultTags />
      <title>{title}</title>
    </>
  );
};

export default Head;
