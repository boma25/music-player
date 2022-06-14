import React from 'react';
import {Modal, View, Image, Text} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import MoreSvg from '../../assets/RNSVG/general/moreIcone';
import DownAngleSvg from '../../assets/RNSVG/Player/downAngle';
import {musicList} from '../../data';
import usePlayer from '../../hooks/playerHook';
import {AppDispatch, RootState} from '../../store';
import {updatePlayer} from '../../store/slices/appSlice';
import colors from '../../theme/colors';
import PlayBack from '../playBack';
import ProgressBar from '../progressBar';
import VolumeControls from '../volumeControls';
import styles from './styles';

const PlayerScreen = () => {
  const {togglePlayer, next, prev, setVolume, seek} = usePlayer();
  const {
    player: {show, paused, volume},
    nowPlaying,
  } = useSelector((state: RootState) => state.app);
  const dispatch: AppDispatch = useDispatch();

  const {artwork, artist_name, name} = nowPlaying;

  const _closePlayer = () => {
    dispatch(updatePlayer({show: false}));
  };

  return (
    <Modal visible={show} animationType="slide">
      <View style={styles.container}>
        <DownAngleSvg style={styles.downAngle} onPress={_closePlayer} />

        <Image source={{uri: artwork}} style={styles.image} />

        <View style={styles.body}>
          <View style={styles.header}>
            <View>
              <Text style={styles.artist}>{artist_name}</Text>
              <Text style={styles.name}>{name}</Text>
            </View>
            <MoreSvg />
          </View>
          <ProgressBar {...{seek}} />
          <PlayBack {...{togglePlayer, next, prev, paused}} />
          <VolumeControls {...{volume, setVolume}} />
        </View>
        <View style={styles.lyricsContainer}>
          <Text style={styles.lyrics}>
            <Text style={{color: colors.PRIMARY}}>
              I'm tryna put you in the worst mood, ah P1 cleaner than{' '}
            </Text>
            your church shoes, ah
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default PlayerScreen;
