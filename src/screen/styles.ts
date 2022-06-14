import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import colors from '../theme/colors';

export default StyleSheet.create({
  user: {
    width: widthPercentageToDP(9),
    height: heightPercentageToDP(7),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: widthPercentageToDP(8),
    backgroundColor: colors.SECONDARY,
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(0.5),
  },
  today: {
    color: colors.WHITE,
    fontSize: RFPercentage(3),
    fontWeight: '700',
    marginTop: heightPercentageToDP(2),
  },
  body: {
    paddingHorizontal: widthPercentageToDP(8),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightPercentageToDP(2),
  },
  shuffle: {
    backgroundColor: colors.PRIMARY,
    width: widthPercentageToDP(50),
  },
});
