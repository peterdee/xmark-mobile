import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  button: {
    bottom: (colors.spacer * 3),
    left: 'auto',
    position: 'absolute',
    right: 'auto',
  },
  buttonText: {
    color: colors.appText,
  },
  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
  },
  modalControls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: colors.spacer,
    width: '100%',
  },
  modalDataInput: {
    backgroundColor: colors.appBackground,
    borderRadius: colors.spacerQuarter,
    color: colors.appText,
    fontSize: colors.spacer,
    justifyContent: 'flex-start',
    marginTop: colors.spacer,
    padding: colors.spacerHalf,
    textAlign: 'left',
    width: '100%',
  },
  modalDataInputArea: {
    textAlignVertical: 'top',
  },
  modalCoordinates: {
    color: colors.appBackground,
    fontSize: (colors.spacer - 2),
  },
});

export default styles;
