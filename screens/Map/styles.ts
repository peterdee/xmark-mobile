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
});

export default styles;
