import { TouchableOpacity, View } from "react-native";
import Txt from "./Txt";
import { s } from "./Header.style";
import { useNavigation } from "@react-navigation/native";

export default function Header({ city }) {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => nav.navigate("Home")}>
        <Txt style={s.button}>{"<-"}</Txt>
      </TouchableOpacity>
      <View style={s.headers}>
        <Txt>{city}</Txt>
        <Txt style={s.forecasts}>7 day forecasts</Txt>
      </View>
    </View>
  );
}
