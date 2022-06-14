import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SearchSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m19.207 14.942 3.953 3.944a3.11 3.11 0 0 1 0 4.184c-1.198 1.195-2.994 1.195-4.192 0l-3.952-3.945c-1.438.718-3.114 1.196-4.791 1.196-5.629 0-10.18-4.543-10.18-10.16C.045 4.541 4.596 0 10.225 0s10.18 4.542 10.18 10.16c0 1.674-.479 3.347-1.198 4.782ZM2.44 10.16a7.762 7.762 0 0 0 7.785 7.77 7.762 7.762 0 0 0 7.785-7.77 7.762 7.762 0 0 0-7.785-7.77 7.762 7.762 0 0 0-7.785 7.77Z"
      fill={props.fill}
    />
  </Svg>
);

export default SearchSvg;
