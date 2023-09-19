import "./App.css";
import "./fonts/montserrat/Montserrat-Bold.ttf";
import Error from "./components/error";
import Upcoming from "./components/upcoming";
import SlotBooking from "./components/slot-booking";
import ScheduleContainer from "./components/schedule";
import Navbar from "./components/navbar";
import Progress from "./components/progress";
import { Config } from ".";
import { useCalendarData } from "./hooks/useCalendarData";

function App({ config }: { config: Config }) {
  const { ERROR, TEXT, LOGO } = config;

  const [loading, data, error] = useCalendarData(config);

  console.log(data);

  if (ERROR) {
    return <Error text={ERROR} />;
  }

  if (error) {
    return (
      <Error
        text={
          "Error fetching data from Google Calendar API. Please check config."
        }
      />
    );
  }

  if (loading || !data) return <div className="loading">Loading...</div>;

  let scheduledEvents = data.filter((e: EventItem) => {
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
      />
    </div>
  );

  return <>Hello</>;
}

export default App;
