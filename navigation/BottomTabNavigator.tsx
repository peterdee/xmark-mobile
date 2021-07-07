import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { BottomTabParamList, MapParamList, SavedLocationsParamList } from './types';
import Colors from '../constants/Colors';
import Map from '../screens/Map';
import SavedLocations from '../screens/SavedLocations';

const MapStack = createStackNavigator<MapParamList>();

const MapNavigator = (): React.ReactElement => (
  <MapStack.Navigator>
    <MapStack.Screen
      name="MapScreen"
      component={Map}
      options={{
        headerShown: false,
      }}
    />
  </MapStack.Navigator>
);

const SavedLocationsStack = createStackNavigator<SavedLocationsParamList>();

const SavedLocationsNavigator = (): React.ReactElement => (
  <SavedLocationsStack.Navigator>
    <SavedLocationsStack.Screen
      component={SavedLocations}
      name="SavedLocationsScreen"
      options={{ headerTitle: 'Saved locations' }}
    />
  </SavedLocationsStack.Navigator>
);

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): React.ReactElement {
  return (
    <BottomTab.Navigator
      initialRouteName="Map"
      tabBarOptions={{
        activeTintColor: Colors.accent,
        inactiveTintColor: Colors.inactiveText,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        component={MapNavigator}
        name="Map"
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <MaterialCommunityIcons
              color={color}
              name="map-marker-multiple-outline"
              size={24}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        component={SavedLocationsNavigator}
        name="SavedLocations"
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <Ionicons
              color={color}
              name="list"
              size={24}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
