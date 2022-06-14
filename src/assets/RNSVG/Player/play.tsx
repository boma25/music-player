import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';

const PlaySvg = (props: SvgProps) => (
  <Svg
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={30} cy={30} r={30} fill="#7971E9" />
    <Path
      d="m39.691 27.731-13.31-9.155c-.547-.377-1.116-.576-1.603-.576-1.07 0-1.778.897-1.778 2.34v19.25c0 .705.205 1.294.509 1.704.308.416.791.636 1.313.636.486 0 1.033-.2 1.58-.576L39.7 32.199c.855-.59 1.323-1.383 1.323-2.234 0-.852-.476-1.645-1.332-2.234Z"
      fill="#F4EEFF"
    />
  </Svg>
);

export default PlaySvg;
