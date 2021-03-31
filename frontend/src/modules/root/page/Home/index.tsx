import Head from 'next/head';
import React from 'react';
import { Main } from './styled';
import WhatNewSection from 'modules/root/components/WhatNewSection';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <WhatNewSection />
      </Main>
    </div>
  );
};
export default Home;
