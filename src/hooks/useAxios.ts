import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { getDateDifference } from "../helpers/getDateDifference";
export function useAxios<T>(
  config: AxiosRequestConfig
): [boolean, T | undefined, string, boolean | string] {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");
  const [vacant, setVacant] = useState<boolean | string>(false);

  useEffect(() => {
    let interval = setInterval(() => {
      request();
    }, 1000 * 30);

    request();

    return () => clearInterval(interval);
  }, []);

  async function request() {
    setLoading(true);

    await axios(config)
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
            setVacant(false);
          } else {
            console.log("vacant");
            setVacant(getDateDifference(Date.parse(eventStartTime), now));
          }
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
