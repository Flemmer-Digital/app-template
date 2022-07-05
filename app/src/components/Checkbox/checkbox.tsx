import React from 'react';
import PressableOpacity from '../PressableOpacity';
import styles from './checkboxStyles';
import Flex from '../Flex/index';
import Icon from 'react-native-vector-icons/Feather';
import TextView from '../Text/index';
import themeSettings from 'app/src/config/themeSettings';

export interface CheckboxProps {
  checked: boolean;
  label: React.ReactNode | string;
  disabled?: boolean;
  onPress: (currChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, label, disabled, onPress }) => {
  return (
    <PressableOpacity onPress={onPress} disabled={disabled} style={styles.container}>
      <Flex
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        style={styles.flexContainer}
      >
        <Flex direction="row" justifyContent="center" alignItems="center" style={styles.box}>
          {checked && <Icon name="check" size={20} color={themeSettings.colors.primary} />}
        </Flex>
        <TextView style={styles.label}>{label}</TextView>
      </Flex>
    </PressableOpacity>
  );
};

export default Checkbox;
