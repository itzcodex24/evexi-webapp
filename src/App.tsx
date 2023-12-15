import "./App.css";
import "./fonts/montserrat/Montserrat-Bold.ttf";
import Error from "./components/error";
import Navbar from "./components/navbar";
import Progress from "./components/progress";
import { Config } from ".";
import  useCalendarData from "./hooks/useCalendarData";

function App({ config }: { config: Config }) {
  const { ERROR, TEXT, LOGO } = config;

  const [loading, data, error] = useCalendarData(config);

  if (ERROR) return <Error text={ERROR} />;

  if (error) return <Error text={error} />;

  if (loading && !data) return <div className="loading">Loading...</div>;

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
    <>
    <div className="container">
      <div className="left-container">
        <Navbar logo={LOGO ?? null} />
        <div className="content">
          <div className="meeting-container">
            <h1>
              {JSON.parse(TEXT ?? "{}").MEETING_ROOM_NAME ??
                "MEETING_ROOM_NAME"}
            </h1>
          </div>
          <Progress events={returnEvents} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
