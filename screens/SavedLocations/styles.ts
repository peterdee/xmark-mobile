import { StyleSheet } from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  clearLocationsButton: {
    backgroundColor: styles.error,
  },
  clearLocationsText: {
    color: styles.appBackground,
    fontSize: (styles.spacer + styles.spacerQuarter),
    marginBottom: styles.spacer,
    marginHorizontal: (styles.spacer * 2),
    textAlign: 'center',
  },
  closeModalButton: {
    backgroundColor: 'transparent',
    marginTop: (styles.spacer * 2),
  },
  closeModalButtonText: {
    color: styles.appBackground,
    fontSize: styles.spacer,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
  editLocationDataInput: {
    backgroundColor: styles.appBackground,
    borderColor: styles.appBackground,
    borderRadius: styles.spacerQuarter,
    borderWidth: 1,
    color: styles.appText,
    fontSize: styles.spacer,
    justifyContent: 'flex-start',
    marginTop: styles.spacer,
    padding: styles.spacerHalf,
    textAlign: 'left',
    width: '80%',
  },
  editLocationDataInputArea: {
    minHeight: (styles.spacer * 10),
    textAlignVertical: 'top',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: styles.spacerHalf,
    width: '100%',
  },
  locationDataNavigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: styles.spacer,
    width: '80%',
  },
  locationModalDeleteButton: {
    marginTop: (styles.spacer * 2),
    width: '80%',
  },
  locationModalMap: {
    height: '50%',
    marginTop: styles.spacer,
    width: '80%',
  },
  locationModalText: {
    fontSize: styles.spacer,
    marginTop: styles.spacer,
  },
  locationModalTitle: {
    color: styles.appBackground,
    fontSize: (styles.spacer + styles.spacerHalf),
    textAlign: 'left',
    width: '80%',
  },
  locationsNotFoundText: {
    fontSize: styles.spacer,
    fontWeight: 'bold',
  },
  locationsNotFoundWrap: {
    alignItems: 'center',
    flex: 1,
    marginTop: styles.spacer,
  },
  markerItemWrap: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: styles.spacerHalf,
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
