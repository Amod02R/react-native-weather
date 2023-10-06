import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";

export default function Txt({ children, style, ...restProps }) {
  const { height } = useWindowDimensions();
  const deviceRatio = 1 / height;
  const fontsize = style?.fontSize || s.text.fontSize;

  return (
    <Text
      style={[
        s.text,
        style,
        { fontSize: Math.round(fontsize * deviceRatio * height) },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
}
