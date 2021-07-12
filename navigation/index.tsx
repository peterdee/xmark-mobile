import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import NotFound from '../screens/NotFound';
import PIN from '../screens/PIN';
import ResetPIN from '../screens/ResetPIN';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName="PIN"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      component={NotFound}
      name="NotFound"
      options={{ title: 'Oops!' }}
    />
    <Stack.Screen
      component={PIN}
      name="PIN"
    />
    <Stack.Screen
      component={ResetPIN}
      name="ResetPIN"
    />
    <Stack.Screen
      component={BottomTabNavigator}
      name="Root"
    />
  </Stack.Navigator>
);

const Navigation = (): React.ReactElement => (
  <NavigationContainer linking={LinkingConfiguration}>
    <RootNavigator />
  </NavigationContainer>
);

export default Navigation;
