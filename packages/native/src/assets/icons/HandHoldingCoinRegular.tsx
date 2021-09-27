import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function HandHoldingCoinRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.992 20.642c1.08.624 2.448.72 4.08-.048l8.76-4.032a2.28 2.28 0 001.32-2.064c0-1.272-1.056-2.208-2.232-2.208-.24 0-.456.048-.864.216l-.072-.168c-.528-1.008-1.728-1.392-2.784-.936l-1.848.84c.336.312.6.696.792 1.152l1.632-.72c.384-.192.84-.024 1.032.384l.096.24-3.984 1.8a2.29 2.29 0 00-1.272-2.328l-3.84-1.776c-2.568-1.2-4.992-.744-6.96 1.56v6.24h1.464V13.13c1.44-1.44 3.024-1.656 4.872-.816L12 14.09a.88.88 0 01.504.816c0 .624-.672 1.056-1.224.792l-3.192-1.464-.48 1.08 3.432 1.608c.576.264 1.248.216 2.232-.216l6.336-2.856a.73.73 0 011.056.648c0 .288-.168.6-.432.72l-8.784 4.056c-1.056.48-1.944.528-2.736.072l-2.592-1.44-.72 1.296 2.592 1.44zm.72-14.448a3.329 3.329 0 003.336 3.336 3.329 3.329 0 003.336-3.336 3.329 3.329 0 00-3.336-3.336 3.329 3.329 0 00-3.336 3.336zm1.392 0c0-1.08.864-1.944 1.944-1.944s1.944.864 1.944 1.944-.864 1.944-1.944 1.944a1.936 1.936 0 01-1.944-1.944z"
        fill={color}
      />
    </Svg>
  );
}

export default HandHoldingCoinRegular;
