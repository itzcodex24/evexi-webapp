import axios from "axios";

export function getGoogleData(
  calendarId: string | undefined,
  apiKey: string | undefined,
): Promise<EventItem[]> {
  return new Promise((resolve, reject) => {
    if (!calendarId || !apiKey) return resolve([]);
    const startOfToday = new Date(new Date().setHours(0, 0, 0)).toISOString();
    const endOfToday = new Date(new Date().setHours(23, 59, 59)).toISOString();

    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${startOfToday}&timeMax=${endOfToday}`;

    axios
      .get(url, {
        method: "GET",
      })
      .then((res) => resolve(processGoogleAPIResponse(res.data)))
      .catch((err) => reject("Error fetching Office data: " + err));
  });
}

function processGoogleAPIResponse(response: GoogleAPI): EventItem[] {
  const data = response.items.map((item) => {
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
}
