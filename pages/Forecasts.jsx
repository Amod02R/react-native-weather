import { useRoute } from "@react-navigation/native";
import Txt from "../components/Txt";
import { s } from "./Forecasts.style";
import Header from "../components/Header";

export default function Forecasts() {
  const { params } = useRoute();
  console.log(params);
  return <Header city={params.city} />;
}
