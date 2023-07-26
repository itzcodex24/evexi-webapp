import { useEffect } from "react";
import "./App.css";
import "./fonts/montserrat/Montserrat-Bold.ttf";
import { useAxios } from "./hooks/useAxios";
import Error from "./components/error";
import Upcoming from "./components/upcoming";
import SlotBooking from "./components/slot-booking";
import ScheduleContainer from "./components/schedule";
import Navbar from "./components/navbar";
import Progress from "./components/progress";

function App({ config }: { config: any }) {
  const { COLORS, API_KEY, CID, LOGO, TEXT } = config;

  const now = new Date(Date.now());
  const tomorrow = now.getTime() + 60 * 60 * 24 * 1000;

  const [loading, events, _error, vacant] = useAxios<EventAPI>({
    method: "GET",
    url: `https://www.googleapis.com/calendar/v3/calendars/${CID}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true&maxResults=5&timeMin=${now.toISOString()}&timeMax=${new Date(
      tomorrow
    ).toISOString()}`,
  });

  useEffect(() => {
    if (!COLORS) return;

    Object.keys(JSON.parse(COLORS)).map((k) => {
      const key = `--${k.replace(/_/g, "-").toLowerCase()}`;
      document.documentElement.style.setProperty(key, JSON.parse(COLORS)[k]);
    });
  });

  if (!API_KEY || !CID) {
    return (
      <Error
        text={
          "Please insert both the 'Google Calendar API Key' and 'Google Calendar ID' into the Evexi Admin Dashboard"
        }
      />
    );
  }

  if (_error) {
    return (
      <Error
        text={
          "Error fetching data from Google Calendar API. Please check config"
        }
      />
    );
  }

  if (!events) return <></>;

  return (
    <div className="container">
      <div className="left-container">
        <Navbar logo={LOGO} />
        <div className="meeting-container">
          <h1>{JSON.parse(TEXT).MEETING_ROOM_NAME}</h1>
        </div>
        <Progress events={events} vacant={vacant} />
        <Upcoming
          events={events}
          vacant={vacant}
          upNextIndex={vacant ? 0 : 1}
        />
        <SlotBooking text={JSON.parse(TEXT).BOOKING_TEXT} />
      </div>
      <ScheduleContainer
        text={JSON.parse(TEXT).BOOKING_TEXT}
        events={events}
        vacant={vacant}
      />
    </div>
  );
}

export default App;
