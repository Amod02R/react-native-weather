import { View } from "react-native";
import Txt from "./Txt";
import { StyledLable, StyledValue, StyledView, s } from "./Advanced.style";
export function Advanced({ sunrise, sunset, windSpeed }) {
  return (
    <View style={s.container}>
      <StyledView>
        <StyledValue>{sunrise}</StyledValue>
        <StyledLable>Sunrise</StyledLable>
      </StyledView>
      <StyledView>
        <StyledValue>{sunset}</StyledValue>
        <StyledLable>Sunset</StyledLable>
      </StyledView>
      <StyledView>
        <StyledValue>{windSpeed}km/hr</StyledValue>
        <StyledLable>Windspeed</StyledLable>
      </StyledView>
    </View>
  );
}
