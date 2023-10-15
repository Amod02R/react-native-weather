import { useRoute } from "@react-navigation/native";

import Header from "../components/Header";
import ForecastList from "../components/ForecastLIst";
import { Text, View } from "react-native";
import { getinterpretation, DAYS } from "../utils/weatherUtils";

export default function Forecasts() {
  const { params } = useRoute();

  const forecasts = (
    <View style={{ marginTop: 50 }}>
      {params.time.map((time, index) => {
        const code = params.weathercode[index];
        const image = getinterpretation(code).image;
        const tempr = params.temperature_2m_max[index];
        const date = new Date(time);
        const day = DAYS[date.getDay()];
        const convertedDate = date.toLocaleDateString("default", {
          day: "numeric",
          month: "numeric",
        });
        return (
          <ForecastList
            key={time}
            image={image}
            day={day}
            date={convertedDate}
            temr={tempr.toFixed(0)}
          />
        );
      })}
    </View>
  );

  return (
    <>
      <Header city={params.city} />

      {forecasts}
    </>
  );
}
