import React from 'react';
import { Row } from '../Row';
import { render } from '@testing-library/react-native';

test('make sure to render title and value in Row', () => {
  const { getByText } = render(<Row title="Name" value="Rick" />);
  expect(getByText('Name')).not.toBeNull();
  expect(getByText('Rick')).not.toBeNull();
});
