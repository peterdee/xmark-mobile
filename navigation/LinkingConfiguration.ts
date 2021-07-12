import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      NotFound: '*',
      PIN: 'pin',
      ResetPIN: 'reset-pin',
      Root: {
        screens: {
          Map: {
            screens: {
              MapScreen: 'map',
            },
          },
          SavedLocations: {
            screens: {
              SavedLocationsScreen: 'saved-locations',
            },
          },
        },
      },
    },
  },
};
