import React from 'react';
import Navigation from './navigation';
import client from './apollo/client';
import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'react-native';
import { COLORS } from './common';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.dark} />

      <Navigation />
    </ApolloProvider>
  );
};

export default App;
