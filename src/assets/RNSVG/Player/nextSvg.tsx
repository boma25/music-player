import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const NextSvg = (props: SvgProps) => (
  <Svg
    width={23}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.724 9.743 3.414.588C2.867.211 2.298.012 1.811.012.742.012.033.909.033 2.352v19.25c0 .705.205 1.294.51 1.704.308.416.79.636 1.312.636.487 0 1.033-.2 1.58-.576l13.298-9.155c.855-.59 1.324-1.383 1.323-2.235 0-.85-.476-1.644-1.332-2.233Z"
      fill="#F4EEFF"
    />
    <Path d="M21.634 23.962H21.591h.043Z" fill="#000" />
    <Path
      d="m21.558 0-.55.002c-.72 0-1.344.587-1.344 1.308v21.303c0 .722.613 1.315 1.335 1.315l.584.007c.718-.003 1.259-.601 1.259-1.32V1.308C22.842.587 22.279 0 21.558 0Z"
      fill="#F4EEFF"
    />
  </Svg>
);

export default NextSvg;
