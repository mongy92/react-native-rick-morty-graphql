import React from 'react';
import Navigation from './navigation';
import client from './apollo/client';
import { ApolloProvider } from '@apollo/client';
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
