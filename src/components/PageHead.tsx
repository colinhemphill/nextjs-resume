import Head from 'next/head';
import React from 'react';

interface Props {
  description: string;
  title: string;
}

const PageHead = ({ description, title }: Props): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default PageHead;
