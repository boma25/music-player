import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgSearch = (props: SvgProps) => (
  <Svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m17.751 18.786-3.763-3.763a7.935 7.935 0 1 1 1.035-1.035l3.763 3.763a.732.732 0 0 1-1.035 1.035ZM2.463 8.927a6.463 6.463 0 1 0 6.464-6.464 6.471 6.471 0 0 0-6.464 6.464Z"
      fill="#F9F8FF"
      fillOpacity={0.5}
    />
  </Svg>
);

export default SvgSearch;
