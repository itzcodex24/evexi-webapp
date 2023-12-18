import { useEffect, useState } from "react";
import { Config } from "..";
import axios from "axios";

const INTERVAL_TIME: number = 1000 * 10;
const useCalendarData = (config: Config): [boolean, EventItem[], string] => {
  const [data, setData] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      request();
    }, INTERVAL_TIME);

    request();

    return () => clearInterval(interval);
  });

  function request() {
    setLoading(true);
    setError("");

    getData(config)
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e);
        setError("Error getting data");
      })
      .finally(() => setLoading(false))
  }

  return [loading, data, error];
};

const getData = async (config: Config): Promise<EventItem[]> => {
  try {
    const data = await getGoogleData(
      config.GOOGLE_CALENDAR_ID,
      config.GOOGLE_API_KEY,
    );

    console.log(data);

    return [...data];
  } catch (error) {
    console.log(error);
    throw new Error("Fetch made unsuccessfully");
  }
};

const getGoogleData = async (
  cid: string | undefined,
  key: string | undefined,
) => {
  if (!cid || !key) return [];

  const startOfToday = new Date(new Date().setHours(0, 0, 0)).toISOString();
  const endOfToday = new Date(new Date().setHours(23, 59, 59)).toISOString();

  const url = `https://www.googleapis.com/calendar/v3/calendars/${cid}/events?key=${key}&orderBy=startTime&singleEvents=true&timeMin=${startOfToday}&timeMax=${endOfToday}`;

  const res = await axios.get(url, {
    method: "GET",
  });

  return proccess(res.data);
};

const proccess = (res: any): EventItem[] => {
  const data = res.items.map((item: any) => {
    return {
      summary: item.summary,
      start: {
        dateTime: item.start.dateTime,
        timeZone: item.start.timeZone,
      },
      end: {
        dateTime: item.end.dateTime,
        timeZone: item.end.timeZone,
      },
      created: item.created,
    };
  });

  return data;
};

export default useCalendarData;

