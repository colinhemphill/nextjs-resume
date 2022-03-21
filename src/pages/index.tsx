import { InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import getCMSIntegration from '../cms-integration/getCMSIntegration';
import { CMSPrivateInformation } from '../cms-integration/markdown/private';
import ResumeLayout from '../components/ResumeLayout/ResumeLayout';

export const getStaticProps = async () => {
  const {
    education,
    hobbies,
    links,
    personalInformation,
    professional,
    skills,
  } = await getCMSIntegration('markdown');

  return {
    props: {
      education,
      hobbies,
      links,
      personalInformation,
      professional,
      skills,
    },
  };
};

export interface ResumePageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {
  privateInformation?: CMSPrivateInformation[];
  secret?: string;
}

const ResumePage: NextPage<ResumePageProps> = (props) => {
  return <ResumeLayout {...props} />;
};

export default ResumePage;
