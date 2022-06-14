import {musicList} from '../data';

const transformPlaylist = (): any[] => {
  let list = [...musicList];

  list.forEach((value: any) => {
    (value.url = value.source),
      (value.duration = 25),
      (value.title = value.name),
      (value.artist = value.artist_name),
      (value.date = new Date(value.releasedate).toISOString());

    return value;
  });
  return list;
};

const formatTime = (time: number) => {
  return new Date(time * 1000).toISOString().substr(14, 5);
};
export {transformPlaylist, formatTime};
