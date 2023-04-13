import { personal } from '@content';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Prose from '../Prose/Prose';
import { SectionHeading } from '../SectionHeading/SectionHeading';

const AboutMe: React.FC = () => {
  return (
    <article>
      <SectionHeading icon={faUser} level={3} text="About Me" />
      <Prose html={personal.body.html} />
    </article>
  );
};

export default AboutMe;
