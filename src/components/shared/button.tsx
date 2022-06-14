import React, {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import colors from '../../theme/colors';

interface button {
  text?: string;
  buttonStyle?: any;
  onPress?: () => void;
}
const Button: FC<button> = ({text, buttonStyle, onPress}) => {
  return (
    <Pressable style={{...styles.container, ...buttonStyle}} onPress={onPress}>
      <Text style={styles.text}>{text || 'button'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPercentageToDP(5),
    borderRadius: 3,
    minWidth: widthPercentageToDP(30),
    paddingHorizontal: widthPercentageToDP(5),
  },
  text: {
    color: colors.WHITE,
  },
});

export default Button;
