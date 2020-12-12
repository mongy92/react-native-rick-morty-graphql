import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const CharacterList = () => {
  const navigation = useNavigation();

  const onPressCharacter = () => {
    navigation.navigate('CharacterDetails', {
      id: 1,
      name: 'Ahmed Mongy',
    });
  };
  return (
    <View>
      <Text>CharacterList</Text>
      <Button title="Details" onPress={onPressCharacter} />
    </View>
  );
};

export default CharacterList;
