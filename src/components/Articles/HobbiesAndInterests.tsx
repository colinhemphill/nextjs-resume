import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { RichText, RichTextComponent } from '../../lib/cms';
import SectionHeader from '../SectionHeader/SectionHeader';

interface Props {
  personalInformation: CMSPersonalInformation<RichText>;
}

const HobbiesAndInterests = (props: Props): JSX.Element => {
  const { personalInformation } = props;

  return (
    <article>
      <SectionHeader icon={faDiceD20} text="Hobbies & Interests" />
      <RichTextComponent richText={personalInformation.hobbies_and_interests} />
    </article>
  );
};

export default HobbiesAndInterests;
