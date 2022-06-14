import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const VolumeDownSvg = (props: SvgProps) => (
  <Svg
    width={9}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.136.069a.501.501 0 0 0-.494.05L3.102 3.44H.933C.42 3.44 0 3.823 0 4.294v3.413c0 .471.42.853.933.853h2.17l4.538 3.32a.5.5 0 0 0 .495.05.424.424 0 0 0 .264-.383V.454a.427.427 0 0 0-.264-.385Z"
      fill="#E9B171"
    />
  </Svg>
);

export default VolumeDownSvg;
