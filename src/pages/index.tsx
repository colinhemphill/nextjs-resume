import { InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import getCMSIntegration from '../cms-integration/getCMSIntegration';
import ResumeLayout from '../components/Layouts/ResumeLayout';

export const getStaticProps = async () => {
  const { education, hobbies, personalInformation, professional, skills } =
    await getCMSIntegration('markdown');

  return {
    props: {
      education,
      hobbies,
      personalInformation,
      professional,
      skills,
    },
  };
};

export interface ResumePageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {
  privateInformation?: any[];
}

const ResumePage: NextPage<ResumePageProps> = (props) => {
  return <ResumeLayout {...props} />;
};

export default ResumePage;
