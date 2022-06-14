import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import MoreSvg from '../assets/RNSVG/general/moreIcone';
import routes from '../constants/routes';
import {AppDispatch} from '../store';
import {updatePlayer} from '../store/slices/appSlice';
import colors from '../theme/colors';

interface props {
  artwork: string;
  artist_name: string;
  name: string;
}

const MusicItem: FC<props> = ({artwork, artist_name, name}) => {
  const navigation: any = useNavigation();
  const dispatch: AppDispatch = useDispatch();

  const _handlePress = () => {
    dispatch(updatePlayer({show: true}));
  };
  return (
    <Pressable onPress={_handlePress} style={styles.container}>
      <View style={styles.left}>
        <Image
          source={{uri: artwork}}
          style={styles.image}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.artist}>{artist_name}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <MoreSvg />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightPercentageToDP(2),
  },
  image: {
    width: widthPercentageToDP(12),
    height: heightPercentageToDP(5.5),
    borderRadius: 50,
    marginRight: widthPercentageToDP(2),
  },
  name: {
    color: colors.GRAY_01,
    fontSize: RFPercentage(1.5),
  },
  artist: {
    color: colors.GRAY_02,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MusicItem;
