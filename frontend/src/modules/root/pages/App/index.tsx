import 'antd/dist/antd.css';
import React from 'react';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import { client } from 'common/services/client';

import { GlobalStyle } from './styled';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default App;
