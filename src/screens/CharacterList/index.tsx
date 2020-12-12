import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Character } from '../../apollo/Types';
import { STYLES } from '../../common';
import { CharacterCard } from '../../components';
import fake_chars from './fake_chars';

const CharacterList: React.FC = () => {
  const navigation = useNavigation();

  const onPressCharacter = (character: Character) => {
    navigation.navigate('CharacterDetails', {
      id: character.id,
      name: character.name,
    });
  };
  return (
    <FlatList
      data={fake_chars}
      renderItem={({ item }) => (
        <CharacterCard character={item} onPress={() => onPressCharacter(item)} />
      )}
      ItemSeparatorComponent={() => <View style={STYLES.separator} />}
    />
  );
};

export default CharacterList;
