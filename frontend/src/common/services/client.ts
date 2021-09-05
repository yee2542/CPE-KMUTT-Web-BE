import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
  ServerError,
} from '@apollo/client';
import { ErrorResponse, onError } from '@apollo/client/link/error';

import HttpStatusCode from './constants/httpStatusCode';

// FIXME: not integrate with out react app
//FIXME: missing env injection
export const END_POINT = process.env.APP_GRAPHQL_ENDPOINT || 'http://strapi:1337/graphql';

const httpLink = createHttpLink({
  uri: END_POINT,
  // credentials: 'include',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWJmODJjZWNjZjhkMDBhNjkwMDFjMSIsImlhdCI6MTYzMDg1OTYzMiwiZXhwIjoxNjMzNDUxNjMyfQ.guLqsEKsewaGX0Y-_VJTta9Wqtas-iIB3ZJbtTCyPVE',
  },
});

const logoutLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
  if (graphQLErrors) {
    console.log(graphQLErrors[0]);
    if (graphQLErrors[0].extensions) {
      switch (graphQLErrors[0].extensions?.code) {
        case 'GRAPHQL_VALIDATION_FAILED':
          //alert('GRAPHQL_VALIDATION_FAILED');
          break;
        case 'INTERNAL_SERVER_ERROR':
          //alert('Invalid email or password');
          break;
        case 'UNAUTHENICATED':
          //TODO: need to implement refresh token
          //alert('UNAUTHENICATED');
          //window.location.replace('/login');
          break;
        default:
          console.log(
            `[GraphQL error]: Message: ${graphQLErrors[0].message}, Location: ${graphQLErrors[0].locations}, Path: ${graphQLErrors[0].path}`,
          );
          break;
      }
    }
  }

  if (networkError) {
    if ((networkError as ServerError)?.statusCode === HttpStatusCode.UNAUTHORIZED)
      window.location.replace('/logout');
    else if (
      (networkError as ServerError)?.statusCode === HttpStatusCode.NOT_IMPLEMENTED
    ) {
      alert(networkError?.message);
      window.location.replace('/');
    }
  }
});

export const client = new ApolloClient({
  link: from([logoutLink, httpLink]),
  cache: new InMemoryCache(),
});

export const getApolloClient = (ctx?: any, initialState?: NormalizedCacheObject) => {
  return client;
};
