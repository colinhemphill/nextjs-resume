import { GetServerSideProps } from 'next';
import React from 'react';
import { ResumePageProps } from '../..';
import getCMSIntegration from '../../../cms-integration/getCMSIntegration';
import { getPrivateInformation } from '../../../cms-integration/markdown/private';
import ResumeLayout from '../../../components/ResumeLayout/ResumeLayout';

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

  const { education, personalInformation, professional, skills } =
    await getCMSIntegration('markdown');
  const privateInformation = await getPrivateInformation();

  return {
    props: {
      education,
      personalInformation,
      privateInformation,
      professional,
      skills,
    },
  };
};

const ResumePage: React.FC<ResumePageProps> = (props) => {
  return <ResumeLayout {...props} />;
};

export default ResumePage;
