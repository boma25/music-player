import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import SvgSearch from '../assets/RNSVG/general/search';
import colors from '../theme/colors';

interface props {}

const Search: FC<props> = ({}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor={colors.GRAY_01}
      />
      <SvgSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.SECONDARY,
    paddingHorizontal: widthPercentageToDP(4),
    height: heightPercentageToDP(5),
    borderRadius: 20,
    marginTop: heightPercentageToDP(2),
  },
  textInput: {
    padding: 0,
    width: widthPercentageToDP(70),
    color: colors.WHITE,
  },
});

export default Search;
