import React from 'react';
import Heading, { HeadingProps } from '../Heading/Heading';

interface SectionHeadingProps {
  Icon?: Icon;
  level?: HeadingProps['level'];
  text: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { Icon, level = 3, text } = props;

  return (
    <Heading level={level}>
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-light-12 dark:bg-neutral-dark-12">
            <Icon className="h-5 w-5 text-neutral-light-1 dark:text-neutral-dark-1" />
          </div>
        )}
        <div>{text}</div>
      </div>
    </Heading>
  );
};

export default SectionHeading;
