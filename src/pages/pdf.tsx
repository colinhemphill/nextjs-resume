import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import { ResumePageProps } from '.';
import getCMSIntegration from '../cms-integration/getCMSIntegration';

const PDFView = dynamic(() => import('../components/PDF/PDFView'), {
  ssr: false,
});

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

const Page: NextPage<ResumePageProps> = (props) => {
  return <PDFView {...props} />;
};

export default Page;
