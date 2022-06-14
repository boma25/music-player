import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const NotesSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.469.984A.984.984 0 0 0 19.484 0H.984A.984.984 0 0 0 0 .984v18.5a.984.984 0 0 0 1.969 0V1.97h17.515c.544 0 .985-.441.985-.985Z"
      fill={props.fill}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.484 3.5h18.5c.544 0 .985.44.985.984v18.5c0 .544-.441.985-.985.985h-18.5a.984.984 0 0 1-.984-.985v-18.5c0-.543.44-.984.984-.984Zm12.06 8.865a.985.985 0 0 0 .88-1.761l-3-1.5a.985.985 0 0 0-1.424.88V13h-1.016A2.988 2.988 0 0 0 9 15.984a2.988 2.988 0 0 0 2.984 2.985 2.988 2.988 0 0 0 2.985-2.985v-4.407l1.575.788Z"
      fill={props.fill}
    />
  </Svg>
);

export default NotesSvg;
