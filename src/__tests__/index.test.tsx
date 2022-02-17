import React from 'react';
import {
  educationalExperiences as prismicEducationalExperiences,
  links as prismicLinks,
  personalInformation as prismicPersonalInformation,
  professionalExperiences as prismicProfessionalExperiences,
  skills as prismicSkills,
} from '../fixtures/prismic';
import Index from '../pages/index';
import { render } from '../testing/render';

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
        educationalExperiences={prismicEducationalExperiences}
        links={prismicLinks}
        personalInformation={prismicPersonalInformation}
        professionalExperiences={prismicProfessionalExperiences}
        skills={prismicSkills}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
