import Slider from '@react-native-community/slider';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import VolumeDownSvg from '../assets/RNSVG/Player/volumeDown';
import VolumeUpSvg from '../assets/RNSVG/Player/volumeUpSvg';
import colors from '../theme/colors';

interface props {
  volume: number;
  setVolume: (volume: number) => void;
}
const VolumeControls: FC<props> = ({volume, setVolume}) => {
  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={value => setVolume(value)}
        minimumTrackTintColor={colors.YELLOW_02}
        maximumTrackTintColor={colors.YELLOW_01}
        thumbTintColor={colors.YELLOW_02}
        style={styles.progress}
        thumbImage={require('../assets/PNG/Oval.png')}
        tapToSeek
      />

      <View style={styles.speakerContainer}>
        <VolumeDownSvg />
        <VolumeUpSvg style={styles.volUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(5),
  },
  progress: {
    height: heightPercentageToDP(3),
  },
  progressHead: {
    backgroundColor: colors.YELLOW_02,
    width: widthPercentageToDP(3.5),
    height: heightPercentageToDP(1.5),
    marginLeft: widthPercentageToDP(-1),
    marginTop: heightPercentageToDP(-0.6),
    borderRadius: 10,
  },
  progressContainer: {
    backgroundColor: colors.YELLOW_01,
    width: '100%',
    height: heightPercentageToDP(0.1),
    flexDirection: 'row',
    borderRadius: 4,
  },
  volUp: {
    marginTop: heightPercentageToDP(-0.3),
  },
  speakerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightPercentageToDP(0.8),
    width: '98%',
    marginLeft: widthPercentageToDP(1),
  },
});

export default VolumeControls;
