import { View } from "react-native";
import Txt from "./Txt";
import { s } from "./Header.style";

export default function Header({ city }) {
  return (
    <View style={s.container}>
      <Txt style={s.button}>{"<-"}</Txt>
      <View style={s.headers}>
        <Txt>{city}</Txt>
        <Txt style={s.forecasts}>7 day forecasts</Txt>
      </View>
    </View>
  );
}
