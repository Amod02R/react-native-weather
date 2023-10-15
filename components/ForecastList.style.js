import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  img: {
    height: 50,
    width: 50,
  },
  day: {
    fontSize: 15,
  },
  date: {
    fontSize: 15,
    minWidth: 20,
    textAlign: "right",
  },
  temperature: {
    minWidth: 20,
    textAlign: "right",
  },
});
