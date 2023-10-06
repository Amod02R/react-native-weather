import { useEffect, useState } from "react";
import { getTime } from "../utils/currentTime";
import Txt from "./Txt";

export default function Clock() {
  const [time, setTime] = useState(getTime);
  useEffect(() => {
    const intervalID = setInterval(() => setTime(getTime), 1000);

    return () => {
      clearInterval(intervalID);
    };
  });
  return <Txt>{time}</Txt>;
}
