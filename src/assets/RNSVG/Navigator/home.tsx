import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const HomeSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m23.353 10.439-.002-.002-9.79-9.79A2.195 2.195 0 0 0 12 0c-.59 0-1.145.23-1.563.647L.652 10.432l-.01.01a2.212 2.212 0 0 0 .005 3.12 2.197 2.197 0 0 0 1.534.648h.39v7.204A2.589 2.589 0 0 0 5.156 24h3.83a.703.703 0 0 0 .704-.703v-5.649c0-.65.529-1.18 1.18-1.18h2.259c.65 0 1.18.53 1.18 1.18v5.649c0 .388.314.703.702.703h3.83a2.589 2.589 0 0 0 2.586-2.586V14.21h.362c.59 0 1.145-.23 1.563-.648.86-.86.86-2.261 0-3.123Z"
      fill={props.fill}
    />
  </Svg>
);

export default HomeSvg;
