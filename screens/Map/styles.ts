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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    left: 'auto',
    right: 'auto',
    padding: colors.spacer,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.appText,
    color: colors.appText,
  },
  buttonText: {
    color: colors.appText,
  },
});

export default styles;
