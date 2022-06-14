import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const MoreSvg = (props: SvgProps) => (
  <Svg
    width={4}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#F4EEFF"
    />
  </Svg>
);

export default MoreSvg;
