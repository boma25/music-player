import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import colors from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    // height: '100%',
  },
  scrollStyle: {
    height: heightPercentageToDP(86),
    backgroundColor: colors.APP,
  },
  gap: {
    height: heightPercentageToDP(5),
  },
});
