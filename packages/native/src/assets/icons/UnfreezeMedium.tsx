import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function UnfreezeMedium({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.712 22.008l1.296-1.296-18.72-18.72-1.296 1.296 7.8 7.776-2.184-.024-2.544-2.544L3.96 9.6l1.512 1.512-2.712-.072v1.68l2.712-.072L3.96 14.16l1.104 1.104 2.544-2.544 2.64-.024-4.944 4.896 1.104 1.104 4.896-4.944-.024 2.64-2.544 2.544L9.84 20.04l1.512-1.512-.072 2.712h1.68l-.072-2.712L14.4 20.04l1.104-1.104-2.544-2.544-.024-2.184 7.776 7.8zM8.736 4.824l4.2 4.2.024-1.656 2.544-2.544L14.4 3.72l-1.512 1.512.072-2.712h-1.68l.072 2.712L9.84 3.72 8.736 4.824zm4.68 4.68l1.08 1.08 4.44-4.416-1.104-1.104-4.416 4.44zm1.56 1.56l4.2 4.2 1.104-1.104-1.512-1.512 2.712.072v-1.68l-2.712.072L20.28 9.6l-1.104-1.104-2.544 2.544-1.656.024z"
        fill={color}
      />
    </Svg>
  );
}

export default UnfreezeMedium;
