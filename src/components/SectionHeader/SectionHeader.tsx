import { faCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Heading from '../../strum-design-system/components/Heading/Heading';

interface SectionHeaderProps {
  icon: IconDefinition;
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const { icon, text } = props;

  return (
    <Heading level={3}>
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon color="white" icon={icon} transform="shrink-8" />
      </span>
      {text}
    </Heading>
  );
};

export default SectionHeader;
