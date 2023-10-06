import { StyleSheet } from "react-native";
const BUTTON_WIDTH = 30;
export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  button: {
    width: BUTTON_WIDTH,
  },
  headers: {
    flex: 1,
    marginRight: BUTTON_WIDTH,
    alignItems: "center",
  },
  forecasts: {
    fontSize: 17,
  },
});
