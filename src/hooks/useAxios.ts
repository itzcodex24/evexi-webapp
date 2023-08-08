import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { getDateDifference } from "../helpers/getDateDifference";
export function useAxios<T>(
  config: AxiosRequestConfig,
): [boolean, T | undefined, string, string] {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");
  const [vacant, setVacant] = useState<string>("");

  useEffect(() => {
    let interval = setInterval(() => {
      request();
    }, 1000 * 30);

    request();

    return () => clearInterval(interval);
  }, []);

  function request() {
    setLoading(true);

    axios(config)
      .then((res) => {
        setError("");

        setData(res.data);

        let events = res.data.items;
        if (events.length > 0) {
          const eventStartTime = events[0].start.dateTime;
          const eventEndTime = events[0].end.dateTime;
          const now = Date.now();

          if (
            now > Date.parse(eventStartTime) &&
            now < Date.parse(eventEndTime)
          ) {
            setVacant("MIP");
          } else {
            console.log("vacant");
            setVacant(getDateDifference(Date.parse(eventStartTime), now));
          }
        } else {
          setVacant("No upcoming events");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });

    setLoading(false);
  }

  return [loading, data, error, vacant];
}
