import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const DownAngleSvg = (props: SvgProps) => (
  <Svg
    width={23}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 2.86C0 2.152.26 1.443.784.89a2.844 2.844 0 0 1 4.03-.103l6.706 6.4L18.18.794a2.843 2.843 0 0 1 4.03.09 2.868 2.868 0 0 1-.09 4.044l-8.623 8.279a2.845 2.845 0 0 1-3.934.006L.886 4.935A2.864 2.864 0 0 1 0 2.86Z"
      fill="#F4EEFF"
    />
  </Svg>
);

export default DownAngleSvg;
