import React from 'react';
import { EpisodeCard } from '../EpisodeCard';
import { render } from '@testing-library/react-native';

test('make sure EpisodeCard to  display name and air_date', () => {
  const { getByText } = render(<EpisodeCard name="TestName" air_date="TestDate" />);
  expect(getByText('TestName')).not.toBeNull();
  expect(getByText('TestDate')).not.toBeNull();
});
