import React, {useEffect, useRef, useState} from 'react';
import TrackPlayer, {
  Capability,
  State,
  Event,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {useDispatch, useSelector} from 'react-redux';
import {transformPlaylist} from '../helpers/player.helper';
import {AppDispatch, RootState} from '../store';
import {updateMusic, updatePlayer} from '../store/slices/appSlice';

const usePlayer = () => {
  const playbackState: State = usePlaybackState();
  const {
    player: {paused},
  } = useSelector((state: RootState) => state.app);
  const dispatch: AppDispatch = useDispatch();
  const timer = useRef<any>();

  //set up player
  const setUpPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(transformPlaylist());
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  //events list
  const events: Event[] = [
    Event.PlaybackError,
    Event.PlaybackTrackChanged,
    Event.PlaybackState,
  ];

  useTrackPlayerEvents(events, async event => {
    switch (event.type) {
      case Event.PlaybackError:
        console.log(event);
        break;
      case Event.PlaybackTrackChanged:
        const current = await TrackPlayer.getCurrentTrack();
        const song = await TrackPlayer.getTrack(current);
        dispatch(updateMusic(song));
        break;
      case Event.PlaybackState:
        if (timer.current) {
          clearTimeout(timer.current);
        }
        if (event.state === 'ready' && !paused) {
          console.log('playing');
          timer.current = setTimeout(() => {
            TrackPlayer.play();
          }, 2000);
        }
        console.log(event);
        break;
      default:
        break;
    }
  });

  TrackPlayer.updateOptions({
    stopWithApp: false,
    // Media controls capabilities
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],

    // Capabilities that will show up when the notification is in the compact form on Android
    compactCapabilities: [Capability.Play, Capability.Pause],
  });

  const togglePlayer = async () => {
    if (playbackState === State.Ready || playbackState === State.Paused) {
      TrackPlayer.play();
      dispatch(updatePlayer({paused: false}));
    } else if (playbackState === State.Playing) {
      TrackPlayer.pause();
      dispatch(updatePlayer({paused: true}));
    }
  };

  const next = async () => {
    TrackPlayer.skipToNext();
  };
  const prev = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const setVolume = (volume: number) => {
    TrackPlayer.setVolume(volume);
    // dispatch(updatePlayer({volume}));
  };
  const seek = (position: number) => {
    TrackPlayer.seekTo(position);
    // dispatch(updatePlayer({volume}));
  };

  useEffect(() => {
    setUpPlayer();

    return () => {
      TrackPlayer.destroy();
      clearTimeout(timer.current);
    };
  }, []);

  return {togglePlayer, next, prev, setVolume, seek};
};

export default usePlayer;
