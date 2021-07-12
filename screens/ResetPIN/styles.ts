import { StyleSheet } from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  backButton: {
    marginTop: (styles.spacer * 2),
  },
  container: {
    alignItems: 'center',
    backgroundColor: styles.appBackground,
    flex: 1,
    justifyContent: 'center',
  },
  resetButton: {
    backgroundColor: styles.error,
    marginTop: (styles.spacer * 2),
  },
  resetButtonText: {
    fontSize: styles.spacer,
  },
  text: {
    color: styles.error,
    fontSize: styles.spacer,
    fontWeight: 'bold',
    marginTop: (styles.spacer * 2),
    textAlign: 'center',
    width: '80%',
  },
  title: {
    fontSize: (styles.spacer + styles.spacerHalf),
  },
});
