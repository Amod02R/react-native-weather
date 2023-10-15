import { Image, View } from "react-native";
import Txt from "./Txt";
import { s } from "./ForecastList.style";

export default function ForecastList({ image, day, date, temr }) {
  return (
    <View style={s.container}>
      <Image source={image} style={s.img} />
      <Txt style={s.day}>{day}</Txt>
      <Txt style={s.date}>{date}</Txt>
      <Txt style={s.temperature}>{temr}°</Txt>
    </View>
  );
}
