import { faCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Heading, HeadingProps } from '../Heading/Heading';

interface SectionHeadingProps {
  icon?: IconDefinition;
  level?: HeadingProps['level'];
  text: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { icon, level = 3, text } = props;

  return (
    <Heading level={level}>
      <div className="flex items-center gap-2">
        {icon && (
          <span className="fa-layers fa-fw hidden md:flex">
            <FontAwesomeIcon
              className="text-neutral-light-12 dark:text-neutral-dark-12"
              icon={faCircle}
            />
            <FontAwesomeIcon
              aria-hidden
              className="text-neutral-light-1 dark:text-neutral-dark-1"
              icon={icon}
              transform="shrink-8"
            />
          </span>
        )}
        <div>{text}</div>
      </div>
    </Heading>
  );
};
