import Slider from '@react-native-community/slider';
import React, {FC, useEffect} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useProgress} from 'react-native-track-player';
import {formatTime} from '../helpers/player.helper';
import colors from '../theme/colors';

interface props {
  seek: (value: number) => void;
}
const ProgressBar: FC<props> = ({seek}) => {
  const {position, duration} = useProgress();

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onValueChange={value => seek(value)}
        minimumTrackTintColor={colors.PRIMARY}
        maximumTrackTintColor={colors.WHITE}
        thumbTintColor={colors.PRIMARY}
        style={styles.progress}
        thumbImage={require('../assets/PNG/Oval1.png')}
        tapToSeek
      />

      <View style={styles.timeContainer}>
        <Text style={styles.time}>{formatTime(position)}</Text>
        <Text style={styles.time}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(5),
  },
  progress: {
    height: heightPercentageToDP(1.5),
  },
  progressHead: {
    backgroundColor: colors.PRIMARY,
    width: widthPercentageToDP(3.5),
    height: heightPercentageToDP(1.5),
    marginLeft: widthPercentageToDP(-1),
    marginTop: heightPercentageToDP(-0.5),
    borderRadius: 10,
  },
  progressContainer: {
    backgroundColor: colors.WHITE,
    width: '100%',
    height: heightPercentageToDP(0.5),
    flexDirection: 'row',
    borderRadius: 4,
  },
  time: {
    color: colors.GRAY_01,
    fontSize: RFPercentage(1.5),
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightPercentageToDP(0.5),
    width: '98%',
    marginLeft: widthPercentageToDP(1),
  },
});

export default ProgressBar;
