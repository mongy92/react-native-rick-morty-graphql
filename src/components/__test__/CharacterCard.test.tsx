import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CharacterCard } from '../CharacterCard';

test('make sure that CharacterCard has been called ', () => {
  const onPressMock = jest.fn();
  const { getByTestId } = render(
    <CharacterCard
      character={{ id: '5', name: 'TestName', image: 'image' }}
      onPress={onPressMock}
    />,
  );
  const btn = getByTestId('CharacterCard');
  fireEvent.press(btn);
  expect(onPressMock).toHaveBeenCalled();
});
