import { Image, TouchableOpacity, View } from "react-native";
import { s } from "./Basic.style";
import Txt from "./Txt";
import Clock from "./Clock";
import { useNavigation } from "@react-navigation/native";
export default function Basic({
  temperature,
  interpretation,
  city,
  dailyWeather,
}) {
  const nav = useNavigation();
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={s.temp_box}>
        <TouchableOpacity
          onPress={() =>
            nav.navigate("Forecasts", {
              city,
              ...interpretation,
              ...dailyWeather,
            })
          }
        >
          <Txt style={s.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image source={interpretation.image} style={s.img} />
      </View>
    </>
  );
}
