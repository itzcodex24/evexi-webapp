import { useEffect, useState } from "react";
import { Config } from "..";
import { getGoogleData } from "../helpers/getGoogleData";
import { getOfficeData } from "../helpers/getOfficeData";

const INTERVAL_TIME: number = 1000 * 15;
export function useCalendarData(
  config: Config,
): [boolean, EventItem[], string] {
  const [data, setData] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let interval = setInterval(() => {
      request();
    }, INTERVAL_TIME);

    request();

    return () => {
      clearInterval(interval);
    };
  }, []);

  function request() {
    setLoading(true);
    setError("");

    getData(config)
      .then((res) => {
        setData(res);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }

  return [loading, data, error];
}

function getData(config: Config): Promise<EventItem[]> {
  return new Promise(async (resolve, reject) => {
    try {
      getOfficeData(config.OFFICE_API_KEY).then((officeRes) => {
        getGoogleData(config.GOOGLE_CALENDAR_ID, config.GOOGLE_API_KEY).then(
          (googleRes) => {
            resolve([...officeRes, ...googleRes]);
          },
        );
      });
    } catch (error) {
      reject(error);
    }
  });
}
