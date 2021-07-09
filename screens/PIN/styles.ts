import { StyleSheet } from 'react-native';

import colors from '../../constants/styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.appBackground,
    flex: 1,
    justifyContent: 'space-around',
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
    backgroundColor: colors.appBackground,
    borderRadius: 50,
    display: 'flex',
    height: 64,
    justifyContent: 'center',
    margin: (colors.spacer / 2),
    width: 64,
  },
  keyboardItemEmpty: {
    borderWidth: 0,
  },
  keyboardItemPressed: {
    backgroundColor: colors.appText,
  },
  keyboardText: {
    color: colors.appText,
    fontSize: 24,
  },
  keyboardTextDisabled: {
    color: colors.inactiveText,
  },
  keyboardTextPressed: {
    color: colors.appBackground,
  },
  PINAreaContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  PINAreaItem: {
    backgroundColor: colors.inactiveText,
    borderRadius: 50,
    height: 24,
    width: 24,
  },
  PINAreaItemFilled: {
    backgroundColor: colors.appText,
  },
});
