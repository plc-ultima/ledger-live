import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function LifeRingThin({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 15.36A3.34 3.34 0 018.64 12 3.34 3.34 0 0112 8.64 3.34 3.34 0 0115.36 12 3.34 3.34 0 0112 15.36zM3.12 12c0 4.968 3.912 8.88 8.88 8.88 4.968 0 8.88-4.032 8.88-8.88 0-4.968-3.912-8.88-8.88-8.88-4.968 0-8.88 3.912-8.88 8.88zm.48 0c0-2.256.864-4.296 2.28-5.784l3.24 3.24c-.6.672-.96 1.56-.96 2.544s.36 1.872.96 2.544l-3.24 3.24C4.464 16.296 3.6 14.256 3.6 12zm2.616 6.12l3.24-3.24c.672.6 1.56.96 2.544.96s1.872-.36 2.544-.96l3.216 3.216C16.272 19.536 14.256 20.4 12 20.4s-4.296-.864-5.784-2.28zm0-12.24C7.704 4.464 9.744 3.6 12 3.6s4.296.864 5.784 2.28l-3.24 3.24c-.672-.6-1.56-.96-2.544-.96s-1.872.36-2.544.96l-3.24-3.24zm8.664 8.664c.6-.672.96-1.56.96-2.544s-.36-1.872-.96-2.544l3.24-3.24C19.536 7.704 20.4 9.744 20.4 12a8.338 8.338 0 01-2.304 5.76l-3.216-3.216z"
        fill={color}
      />
    </Svg>
  );
}

export default LifeRingThin;
