import React from 'react';
import {
  educationalExperiences as prismicEducationalExperiences,
  personalInformation as prismicPersonalInformation,
  professionalExperiences as prismicProfessionalExperiences,
  skills as prismicSkills,
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
        education={prismicEducationalExperiences}
        // links={prismicLinks}
        personalInformation={prismicPersonalInformation}
        professional={prismicProfessionalExperiences}
        skills={prismicSkills}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
