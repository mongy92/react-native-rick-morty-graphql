import { ApolloError } from '@apollo/client';

const ERRORS = {
  general: 'Something went wrong, Please try again later.!',
  noSearchData: 'No Search Results',
};

export const errorHandler = (error: ApolloError) => {
  const message = error.message;
  switch (message) {
    case '404: Not Found':
      return ERRORS.noSearchData;
    default:
      return ERRORS.general;
  }
};
