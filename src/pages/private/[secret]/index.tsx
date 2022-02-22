import { GetServerSideProps } from 'next';
import React from 'react';
import { ResumePageProps } from '../..';
import { getCMSIntegration } from '../../../cms';
import ResumeLayout from '../../../components/Layouts/ResumeLayout';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    params: { secret },
    res,
  } = ctx;
  const privateKey = process.env.PRIVATE_KEY;
  if (secret !== privateKey) {
    res.writeHead(401);
    res.end('Not authorized');
    return null;
  }

  const CMS = getCMSIntegration();
  const personalInformation = await CMS.getPersonalInformation();
  const professionalExperiences = await CMS.getProfessionalExperiences();
  const privateInformation = await CMS.getPrivateInformation();
  const educationalExperiences = await CMS.getEducationalExperiences();
  const skills = await CMS.getSkills();
  const links = await CMS.getLinks();

  return {
    props: {
      educationalExperiences,
      links,
      personalInformation,
      privateInformation,
      professionalExperiences,
      skills,
    },
  };
};

const ResumePage: React.FC<ResumePageProps> = (props) => {
  return <ResumeLayout {...props} />;
};

export default ResumePage;
