import "./App.css";
import "./fonts/montserrat/Montserrat-Bold.ttf";
import { useAxios } from "./hooks/useAxios";
import Error from "./components/error";
import Upcoming from "./components/upcoming";
import SlotBooking from "./components/slot-booking";
import ScheduleContainer from "./components/schedule";
import Navbar from "./components/navbar";
import Progress from "./components/progress";

function App({ config }: any) {
  const { API_KEY, CID, LOGO, TEXT, error } = config;

  const startOfToday = new Date(new Date().setHours(0, 0, 0)).toISOString();
  const endOfToday = new Date(new Date().setHours(23, 59, 59)).toISOString();

  const [loading, events, _error, vacant] = useAxios<EventAPI>({
    method: "GET",
    url: `https://www.googleapis.com/calendar/v3/calendars/${CID}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${startOfToday}&timeMax=${endOfToday}`,
  });

  if (error) {
    return <Error text={error} />;
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

  if (loading || !events) return <div className="loading">Loading...</div>;

  let scheduledEvents = events.items.filter((e: EventItem) => {
    const endOfToday = new Date().setHours(23, 59, 59);
    const startOfToday = new Date().setHours(0, 0, 0) - 1000;
    const eventStart = Date.parse(e.start.dateTime);

    if (endOfToday >= eventStart && startOfToday <= eventStart) {
      return e;
    }
  });

  let returnEvents = scheduledEvents.filter((e: EventItem) => {
    if (Date.parse(e.end.dateTime) >= Date.now()) {
      return e;
    }
  });

  return (
    <div className="container">
      <div className="left-container">
        <Navbar logo={LOGO ?? null} />
        <div className="meeting-container">
          <h1>
            {JSON.parse(TEXT ?? "{}").MEETING_ROOM_NAME ?? "MEETING_ROOM_NAME"}
          </h1>
        </div>
        <Progress events={returnEvents} />
        <Upcoming events={returnEvents} />
        <SlotBooking
          text={JSON.parse(TEXT ?? "{}").BOOKING_TEXT ?? "BOOKING_TEXT"}
        />
      </div>
      <ScheduleContainer
        text={JSON.parse(TEXT ?? "{}").BOOKING_TEXT ?? "BOOKING_TEXT"}
        events={scheduledEvents}
        vacant={vacant}
      />
    </div>
  );
}

export default App;
