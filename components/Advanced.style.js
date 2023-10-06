import { StyleSheet, View } from "react-native";
import Txt from "./Txt";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38353562",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
  },
});

export function StyledView({ children }) {
  return <View style={{ alignItems: "center" }}>{children}</View>;
}

export function StyledValue({ children }) {
  return <Txt style={{ fontSize: 13 }}>{children}</Txt>;
}

export function StyledLable({ children }) {
  return <Txt style={{ fontSize: 16 }}>{children}</Txt>;
}
