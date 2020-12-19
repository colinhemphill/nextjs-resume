import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import SectionHeader from '../SectionHeader/SectionHeader';

interface Props {
  personalInformation: CMSPersonalInformation<unknown>;
}

const HobbiesAndInterests = (props: Props): JSX.Element => {
  const { personalInformation } = props;
  const CMS = getCMSIntegration();

  return (
    <article>
      <SectionHeader icon={faDiceD20} text="Hobbies & Interests" />
      <CMS.RichTextComponent
        richText={personalInformation.hobbies_and_interests}
      />
    </article>
  );
};

export default HobbiesAndInterests;
