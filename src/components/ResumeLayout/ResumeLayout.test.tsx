import React from 'react';
import {
  educationalExperiences,
  hobbies,
  links,
  personalInformation,
  professionalExperiences,
  skills,
} from '../../fixtures/markdown';
import { render } from '../../testUtils';
import ResumeLayout from './ResumeLayout';

jest.mock('next/router', () => require('next-router-mock'));

describe('<ResumeLayout />', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('Matches the snapshot', () => {
    const { container } = render(
      <ResumeLayout
        education={educationalExperiences}
        hobbies={hobbies}
        links={links}
        personalInformation={personalInformation}
        professional={professionalExperiences}
        skills={skills}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
