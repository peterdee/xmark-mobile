import { StyleSheet } from 'react-native';

import colors from '../constants/styles';

export default StyleSheet.create({
  bigButtonWrap: {
    backgroundColor: colors.appText,
    borderRadius: colors.spacer,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: colors.spacer,
    padding: colors.spacer,
    width: '60%',
  },
  bigButtonWrapDisabled: {
    backgroundColor: colors.inactiveText,
  },
  bigButtonText: {
    color: colors.appBackground,
    fontSize: colors.spacer,
  },
  linkButtonWrap: {
    backgroundColor: colors.appBackground,
    marginTop: colors.spacer,
  },
  linkButtonText: {
    color: colors.appText,
    fontSize: colors.spacer,
  },
  linkButtonTextDisabled: {
    color: colors.inactiveText,
  },
});
