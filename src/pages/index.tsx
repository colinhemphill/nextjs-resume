import { InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import { getCMSIntegration } from '../cms/';
import { PrismicRichText } from '../cms/prismic';
import ResumeLayout from '../components/Layouts/ResumeLayout';

export const getStaticProps = async () => {
  const CMS = getCMSIntegration();
  const personalInformation = await CMS.getPersonalInformation();
  const professionalExperiences = await CMS.getProfessionalExperiences();
  const educationalExperiences = await CMS.getEducationalExperiences();
  const skills = await CMS.getSkills();
  const links = await CMS.getLinks();

  return {
    props: {
      educationalExperiences,
      links,
      personalInformation,
      professionalExperiences,
      skills,
    },
  };
};

export interface ResumePageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {
  privateInformation?: CMSPrivateInformation<PrismicRichText>[];
}

const ResumePage: NextPage<ResumePageProps> = (props) => {
  return <ResumeLayout {...props} />;
};

export default ResumePage;
