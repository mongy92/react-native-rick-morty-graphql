import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FETCH_CHARACTERS } from '../../apollo/Queries';
import { Character, Characters } from '../../apollo/Types';
import { STYLES } from '../../common';
import { CharacterCard } from '../../components';

const CharacterList: React.FC = () => {
  const navigation = useNavigation();
  /** fetch characters query */
  const { loading, data, error } = useQuery<Characters>(FETCH_CHARACTERS);

  const onPressCharacter = (character: Character) => {
    navigation.navigate('CharacterDetails', {
      id: character.id,
      name: character.name,
    });
  };

  if (error) {
    return <Text style={STYLES.errorText}>Something went wrong, Please try again later.!</Text>;
  }
  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <FlatList
      data={data?.characters.results}
      renderItem={({ item }) => (
        <CharacterCard character={item} onPress={() => onPressCharacter(item)} />
      )}
      ItemSeparatorComponent={() => <View style={STYLES.separator} />}
    />
  );
};

export default CharacterList;
