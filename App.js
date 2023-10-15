import { Alert, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import Home from "./pages/Home";
import { useFonts } from "expo-font";
import backgroundimg from "./assets/background.png";
import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { weatherAPI } from "./api/weatherAPI";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Forecasts from "./pages/Forecasts";

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  useEffect(() => {
    getCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      getWeatherData(coordinates);
      getLocationData(coordinates);
    }
  }, [coordinates]);

  async function getCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();

    if (status === "granted") {
      const location = await getCurrentPositionAsync();

      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: 16.06, lng: 73.46 });
    }
  }

  async function getWeatherData(coords) {
    const data = await weatherAPI.fetchWeatherData(coords);
    setWeather(data);
  }

  async function getLocationData(coords) {
    const data = await weatherAPI.fetchLocationData(coords);
    setLocation(data);
  }

  async function getCoordinatesbyCity(city) {
    try {
      const data = await weatherAPI.fetchCoordinatesbyCity(city);
      setCoordinates(data);
    } catch (error) {
      Alert.alert(error);
    }
  }

  const Stack = createNativeStackNavigator();

  const navTheme = {
    colors: {
      background: "transparent",
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        source={backgroundimg}
        style={s.background}
        imageStyle={s.img}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {isFontLoaded && weather && (
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                  animation: "fade",
                }}
                initialRouteName="Home"
              >
                <Stack.Screen name="Home">
                  {() => (
                    <Home
                      weather={weather}
                      location={location}
                      search={getCoordinatesbyCity}
                    />
                  )}
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} />
              </Stack.Navigator>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
