import { StyleSheet } from 'react-native';

import colors from '../../constants/styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.appBackground,
    flex: 1,
    justifyContent: 'space-around',
  },
  errorMessageWrap: {
    display: 'flex',
    flexDirection: 'row',
    height: (colors.spacer * 2),
    justifyContent: 'center',
    marginTop: colors.spacer,
  },
  errorMessageText: {
    color: colors.error,
    fontSize: colors.spacer,
  },
  firstTimeWrap: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: (colors.spacer * 2),
    marginTop: colors.spacer,
    width: '80%',
  },
  firstTimeText: {
    color: colors.success,
    marginTop: colors.spacer,
    fontSize: colors.spacer,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  firstTimeTitle: {
    color: colors.appText,
    fontSize: (colors.spacer + colors.spacerQuarter),
    textAlign: 'center',
  },
  keyboardBlock: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
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
    borderRadius: (colors.spacer * 2),
    display: 'flex',
    height: (colors.spacer * colors.spacerQuarter),
    justifyContent: 'center',
    margin: colors.spacerHalf,
    width: (colors.spacer * colors.spacerQuarter),
  },
  keyboardItemEmpty: {
    borderWidth: 0,
  },
  keyboardItemPressed: {
    backgroundColor: colors.appText,
  },
  keyboardText: {
    color: colors.appText,
    fontSize: (colors.spacer + colors.spacerHalf),
  },
  keyboardTextDisabled: {
    color: colors.inactiveText,
  },
  keyboardTextPressed: {
    color: colors.appBackground,
  },
  PINAreaContainer: {
    backgroundColor: colors.appBackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: (colors.spacer * 12),
  },
  PINAreaItem: {
    backgroundColor: colors.inactiveText,
    borderRadius: (colors.spacer - colors.spacerQuarter),
    height: (colors.spacer + colors.spacerHalf),
    width: (colors.spacer + colors.spacerHalf),
  },
  PINAreaItemError: {
    backgroundColor: colors.inactiveError,
  },
  PINAreaItemFilled: {
    backgroundColor: colors.appText,
  },
  PINBlock: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  providePIN: {
    fontSize: (colors.spacer + colors.spacerHalf),
    marginBottom: colors.spacer,
    marginHorizontal: (colors.spacer * 2),
    marginTop: (colors.spacer * 2),
    textAlign: 'center',
  },
});
