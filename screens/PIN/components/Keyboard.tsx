import React, { memo } from 'react';
import { View } from 'react-native';

import constants from '../../../constants';
import KeyboardItem from './KeyboardItem';
import styles from '../styles';

interface KeyboardProps {
  disableBackspace: boolean;
  disableNumerics: boolean;
  handleClick: (value: string) => void;
}

const rows = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  [constants.empty, '0', constants.backspace],
];

const Keyboard = (props: KeyboardProps): React.ReactElement => {
  const {
    disableBackspace,
    disableNumerics,
    handleClick,
  } = props;

  return (
    <View style={styles.keyboardWrap}>
      { rows.map((row: string[]): React.ReactElement => (
        <View
          key={JSON.stringify(row)}
          style={styles.keyboardRow}
        >
          { row.map((item: string): React.ReactElement => (
            <KeyboardItem
              disableBackspace={disableBackspace}
              disableNumerics={disableNumerics}
              handleClick={handleClick}
              item={item}
              key={item}
            />
          )) }
        </View>
      )) }
    </View>
  );
};

export default memo(Keyboard);
