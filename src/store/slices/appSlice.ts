import {createSlice} from '@reduxjs/toolkit';
import {musicList} from '../../data';

const initialState = {
  player: {
    show: false,
    paused: true,
    volume: 0.5,
  },
  nowPlaying: {
    ...musicList[0],
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updatePlayer: (state, {payload}) => {
      const {show, paused, volume} = state.player;
      state.player = {
        show: payload?.show !== undefined ? payload.show : show,
        paused: payload?.paused !== undefined ? payload.paused : paused,
        volume: payload?.volume || volume,
      };
    },
    updateMusic: (state, {payload}) => {
      state.nowPlaying = payload;
    },
  },
});

export const {updatePlayer, updateMusic} = appSlice.actions;
export default appSlice.reducer;
