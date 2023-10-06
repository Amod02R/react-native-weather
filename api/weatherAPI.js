import axios from "axios";

export class weatherAPI {
  static async fetchWeatherData(coords) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }

  static async fetchLocationData(coords) {
    const {
      address: { town, state, state_district },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data;
    return town || state_district || state;
  }
}
