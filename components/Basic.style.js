import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  clock: {
    alignItems: "center",
  },
  interpretation: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  img: {
    height: 60,
    width: 60,
  },
  temperature: {
    fontSize: 80,
  },
  interpretation_txt: {
    fontSize: 15,
  },
  temp_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
});
