import React from 'react';
import {
  educationalExperiences,
  hobbies,
  personalInformation,
  professionalExperiences,
  skills,
} from '../fixtures/markdown';
import Index from '../pages/index';
import { render } from '../testUtils';

jest.mock('next/router', () => require('next-router-mock'));

const DEFAULT_ENV = process.env;

describe('Render the main page', () => {
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...DEFAULT_ENV };
  });

  afterAll(() => {
    process.env = DEFAULT_ENV;
  });

  it('Uses a Prismic integration', () => {
    process.env.NEXT_PUBLIC_CMS_INTEGRATION = 'prismic';
    const { container } = render(
      <Index
        education={educationalExperiences}
        hobbies={hobbies}
        personalInformation={personalInformation}
        professional={professionalExperiences}
        skills={skills}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
