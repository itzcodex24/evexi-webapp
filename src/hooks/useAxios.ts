import axios, { AxiosError, AxiosRequestConfig } from "axios";
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
    }, 1000 * 60);

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
            setVacant(getDateDifference(Date.parse(eventStartTime), now));
          }
        } else {
          setVacant("No upcoming meetings");
        }
      })
      .catch((error: AxiosError) => {
        // handle 403 or 429 errors
        if (error.status === 403 || error.status === 429) {
          setError("Too many requests. Please try again later.");
        } else {
          setError(error.message);
        }
      });

    setLoading(false);
  }

  return [loading, data, error, vacant];
}
