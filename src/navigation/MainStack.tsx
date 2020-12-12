import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import CharacterList from '../screens/CharacterList';
import CharacterDetails from '../screens/CharacterDetails';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator>
    <MainStack.Screen component={Splash} name="Splash" options={{ headerShown: false }} />
    <MainStack.Screen
      component={CharacterList}
      name="CharacterList"
      options={{ title: 'Characters' }}
    />
    <MainStack.Screen component={CharacterDetails} name="CharacterDetails" />
  </MainStack.Navigator>
);

export type MainStackParams = {
  CharacterDetails: {
    id: number | string;
    name: string;
  };
};
