import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import CharacterList from '../screens/CharacterList';
import CharacterDetails from '../screens/CharacterDetails';
import { COLORS } from '../common';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator
    screenOptions={{
      headerTintColor: COLORS.dark,
      headerTruncatedBackTitle: '',
      headerBackTitle: '',
      headerTitleAlign: 'center',
    }}>
    <MainStack.Screen component={Splash} name="Splash" options={{ headerShown: false }} />
    <MainStack.Screen
      component={CharacterList}
      name="CharacterList"
      options={{ title: 'Character List' }}
    />
    <MainStack.Screen
      component={CharacterDetails}
      name="CharacterDetails"
      options={{
        title: '',
        headerTransparent: true,
      }}
    />
  </MainStack.Navigator>
);

export type MainStackParams = {
  CharacterDetails: {
    id: number | string;
    name: string;
  };
};
