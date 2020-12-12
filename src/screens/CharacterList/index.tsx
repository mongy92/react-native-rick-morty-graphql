import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Character } from '../../apollo/Types';
import { CharacterCard } from '../../components';

const dummy_char = {
  id: '516',
  name: 'Wasp Rick',
  image: 'https://rickandmortyapi.com/api/character/avatar/516.jpeg',
};
const CharacterList = () => {
  const navigation = useNavigation();

  const onPressCharacter = (char: Character) => {
    navigation.navigate('CharacterDetails', {
      id: char.id,
      name: char.name,
    });
  };
  return <CharacterCard character={dummy_char} onPress={() => onPressCharacter(dummy_char)} />;
};

export default CharacterList;
