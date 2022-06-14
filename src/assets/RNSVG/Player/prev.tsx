import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const PrevSvg = (props: SvgProps) => (
  <Svg
    width={23}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m6.276 15.257 13.31 9.155c.547.377 1.116.576 1.603.576 1.069 0 1.778-.897 1.778-2.34V3.398c0-.705-.205-1.294-.51-1.704-.308-.416-.79-.636-1.312-.636-.487 0-1.033.2-1.58.576L6.267 10.79c-.855.59-1.324 1.383-1.323 2.235 0 .85.476 1.644 1.332 2.233Z"
      fill="#F4EEFF"
    />
    <Path d="M1.366 1.039H1.409h-.043Z" fill="#000" />
    <Path
      d="m1.442 25 .55-.002c.72 0 1.344-.587 1.344-1.308V2.387c0-.722-.613-1.315-1.335-1.315l-.584-.007c-.718.003-1.259.601-1.259 1.32v21.306C.158 24.413.721 25 1.442 25Z"
      fill="#F4EEFF"
    />
  </Svg>
);

export default PrevSvg;
