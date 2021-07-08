import { StyleSheet } from 'react-native';

import colors from '../../constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardWrap: {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
  },
  keyboardRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  keyboardItem: {
    alignItems: 'center',
    borderColor: colors.accent,
    borderWidth: 1,
    borderRadius: 50,
    color: colors.appText,
    display: 'flex',
    height: 64,
    justifyContent: 'center',
    margin: (colors.spacer / 2),
    width: 64,
  },
  keyboardItemDisabled: {
    color: colors.inactiveText,
    borderColor: colors.inactiveText,
  },
  keyboardText: {
    fontSize: 20,
  },
});
