import { Text, View } from "react-native";
import { s } from "./Home.style";
import Txt from "../components/Txt";
import Basic from "../components/Basic";
import { getinterpretation } from "../utils/weatherUtils";
import { Advanced } from "../components/Advanced";
import SearchBar from "../components/SearchBar";

export default function Home({ weather, location, search }) {
  const current_weather = weather.current_weather;
  const currentInterpretation = getinterpretation(current_weather.weathercode);
  return (
    <>
      <View style={s.top}>
        <Basic
          temperature={current_weather.temperature}
          interpretation={currentInterpretation}
          city={location}
          dailyWeather={weather.daily}
        />
      </View>
      <View style={s.middle}>
        <SearchBar onSubmit={search} />
      </View>
      <View style={s.bottom}>
        <Advanced
          sunrise={weather.daily.sunrise[0].split("T")[1]}
          sunset={weather.daily.sunset[0].split("T")[1]}
          windSpeed={current_weather.windspeed}
        />
      </View>
    </>
  );
}
