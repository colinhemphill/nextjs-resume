import React from 'react';
import {
  educationalExperiences as contentfulEducationalExperiences,
  links as contentfulLinks,
  personalInformation as contentfulPersonalInformation,
  professionalExperiences as contentfulProfessionalExperiences,
  skills as contentfulSkills,
} from '../fixtures/contentful';
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

  it('Uses a Contentful integration', () => {
    process.env.NEXT_PUBLIC_CMS_INTEGRATION = 'contentful';
    const { container } = render(
      <Index
        educationalExperiences={contentfulEducationalExperiences}
        links={contentfulLinks}
        personalInformation={contentfulPersonalInformation}
        professionalExperiences={contentfulProfessionalExperiences}
        skills={contentfulSkills}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
