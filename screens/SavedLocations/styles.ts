import { StyleSheet } from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
  locationsNotFoundText: {
    fontSize: styles.spacer,
  },
  locationsNotFoundWrap: {
    marginTop: styles.spacer,
  },
  markerItemWrap: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: styles.spacer,
    marginHorizontal: styles.spacer,
    width: '90%',
  },
  markerItemTitle: {
    color: styles.appText,
    fontSize: styles.spacer,
  },
  markerItemSubtitle: {
    color: styles.inactiveText,
    fontSize: (styles.spacer - styles.spacerQuarter),
  },
  menuIcon: {
    marginRight: styles.spacerHalf,
  },
});
