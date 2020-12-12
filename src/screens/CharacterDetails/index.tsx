import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { MainStackParams } from '../../navigation/MainStack';

const CharacterDetails = () => {
  const { params } = useRoute<RouteProp<MainStackParams, 'CharacterDetails'>>();
  return (
    <View>
      <Text>CharacterDetails</Text>
      <Text>{`Name : ${params.name}`}</Text>
    </View>
  );
};

export default CharacterDetails;
