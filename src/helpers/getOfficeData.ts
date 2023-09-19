import axios from "axios";

export function getOfficeData(token: string | undefined): Promise<EventItem[]> {
  return new Promise((resolve, reject) => {
    if (!token) return resolve([]);
    const url =
      "https://graph.microsoft.com/v1.0/me/events?$select=subject,start,end,location";

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return resolve(processOfficeAPIResponse(res.data.value));
      })
      .catch((err) => reject("Error fetching Office data: " + err));
  });
}

function processOfficeAPIResponse(data: any[]): EventItem[] {
  const events = data.map((item) => {
    return {
      summary: item.subject,
      start: {
        dateTime: item.start.dateTime,
        timeZone: item.start.timeZone,
      },
      end: {
        dateTime: item.end.dateTime,
        timeZone: item.end.timeZone,
      },
      created: item.start.dateTime,
    };
  });

  return events;
}
