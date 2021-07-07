import { StyleSheet } from 'react-native';

import colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: colors.spacer + (colors.spacer / 4),
    fontWeight: 'bold',
  },
  link: {
    marginTop: colors.spacer,
    paddingVertical: colors.spacer,
  },
  linkText: {
    fontSize: colors.spacer,
    color: colors.accent,
  },
});
