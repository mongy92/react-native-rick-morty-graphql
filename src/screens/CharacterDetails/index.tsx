import { useQuery } from '@apollo/client';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { FETCH_CHARACTER_DETAILS } from '../../apollo/Queries';
import { CharacterQueryType } from '../../apollo/Types';
import { MainStackParams } from '../../navigation/MainStack';

const CharacterDetails = () => {
  const { params } = useRoute<RouteProp<MainStackParams, 'CharacterDetails'>>();
  const { loading, data, error } = useQuery<CharacterQueryType>(FETCH_CHARACTER_DETAILS, {
    variables: {
      id: params.id,
    },
  });

  if (error) {
    return null;
  }
  if (loading) {
    return <ActivityIndicator size="small" />;
  }
  console.log('DATA', data);
  return (
    <View>
      <Text>CharacterDetails</Text>
      <Text>{`Name : ${data?.character.name}`}</Text>
    </View>
  );
};

export default CharacterDetails;
