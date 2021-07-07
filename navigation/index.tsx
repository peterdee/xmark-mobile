import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import NotFoundScreen from '../screens/NotFound';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = (): React.ReactElement => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      component={BottomTabNavigator}
      name="Root"
    />
    <Stack.Screen
      component={NotFoundScreen}
      name="NotFound"
      options={{ title: 'Oops!' }}
    />
  </Stack.Navigator>
);

const Navigation = (): React.ReactElement => (
  <NavigationContainer linking={LinkingConfiguration}>
    <RootNavigator />
  </NavigationContainer>
);

export default Navigation;
