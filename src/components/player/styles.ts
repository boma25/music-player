import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.APP,
    height: '100%',
  },
  image: {
    width: '100%',
    height: heightPercentageToDP(40),
  },
  artist: {
    color: colors.GRAY_02,
    fontWeight: '800',
    fontSize: RFPercentage(2.5),
  },
  name: {
    color: colors.GRAY_01,
    fontSize: RFPercentage(1.5),
    fontWeight: '600',
  },
  body: {
    paddingHorizontal: widthPercentageToDP(8),
    marginTop: heightPercentageToDP(10),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lyrics: {
    // fontSize: RFPercentage(1.5),
    color: colors.GRAY_01,
  },
  lyricsContainer: {
    backgroundColor: colors.SECONDARY,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: widthPercentageToDP(8),
    marginTop: heightPercentageToDP(5),
    height: heightPercentageToDP(14),
    paddingVertical: heightPercentageToDP(2),
  },
  downAngle: {
    position: 'absolute',
    right: widthPercentageToDP(8),
    top: heightPercentageToDP(7),
    zIndex: 100,
  },
});
