import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import NextSvg from '../assets/RNSVG/Player/nextSvg';
import PlaySvg from '../assets/RNSVG/Player/play';
import PrevSvg from '../assets/RNSVG/Player/prev';
import colors from '../theme/colors';

interface props {
  togglePlayer: () => Promise<void>;
  next: () => Promise<void>;
  prev: () => Promise<void>;
  paused: boolean;
}
const PlayBack: FC<props> = ({togglePlayer, next, prev, paused}) => {
  return (
    <View style={styles.container}>
      <PrevSvg onPress={prev} />
      {!paused ? (
        <Pressable style={styles.pauseContainer} onPress={togglePlayer}>
          <Text style={styles.pauseText}>| |</Text>
        </Pressable>
      ) : (
        <PlaySvg onPress={togglePlayer} />
      )}
      <NextSvg onPress={next} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: heightPercentageToDP(5),
  },
  pauseContainer: {
    backgroundColor: colors.PRIMARY,
    width: widthPercentageToDP(15.5),
    height: heightPercentageToDP(7.1),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pauseText: {
    fontSize: RFPercentage(2.5),
    fontWeight: '800',
    color: colors.WHITE,
  },
});
export default PlayBack;
