import { useEffect, useState } from "react";
import "./App.css";
import "./fonts/montserrat/Montserrat-Bold.ttf";
import axios from "axios";
import { Evexi, EvexiMock } from "evexi";

function getDateDifference(date1: any, date2: any) {
  const diffInMilli = Math.abs(date2 - date1);
  const minutes = Math.floor(diffInMilli / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;

  if (remainingHours === 0 && remainingMinutes === 0 && days === 0) {
    return "Less than a minute";
  }

  if (days === 0 && remainingHours === 0) {
    return `${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`;
  } else if (days === 0) {
    return `${remainingHours} hour${
      remainingHours > 1 ? "s" : ""
    }, ${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`;
  }

  return `${days} day${days > 1 ? "s" : ""}, ${remainingHours} hour${
    remainingHours > 1 ? "s" : ""
  }, ${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`;
}

function App() {
  const [env, setEnv] = useState<any>(null);

  new EvexiMock(Evexi).all().env({
    API: JSON.stringify({
      API_KEY: "AIzaSyCQJFvN3AAYRc4rQiz8lzhjrKg1lTKZbPg",
      CID: "andrei.cherciu24@gmail.com",
    }),
    TEXT: JSON.stringify({
      PAGE_TITLE: "Starbucks Meeting",
      BOOKING_TEXT: "starbucks.meeting.com",
      MEETING_ROOM_NAME: "room one",
    }),
    COLORS: JSON.stringify({
      FONT_COLOR_PRIMARY: "white",
      FONT_COLOR_SECONDARY: "#2e6a4e",
      FONT_COLOR_MUTED: "#a0a0a0",
      PRIMARY_COLOR: "#243735",
      SECONDARY_COLOR: "#295d46",
      TERTIARY_COLOR: "#2e6a4e",
    }),

    LOGO: "data:image/png;base64,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",
  });

  useEffect(() => {
    async function getVars() {
      const LOGO = await Evexi.env("LOGO");
      const COLORS = await Evexi.env("COLORS");
      const API = await Evexi.env("API");
      const TEXT = await Evexi.env("TEXT");

      if (!LOGO || !COLORS || !API || !TEXT) return;

      setEnv({
        LOGO,
        COLORS: JSON.parse(COLORS),
        API: JSON.parse(API),
        TEXT: JSON.parse(TEXT),
      });
    }
    getVars();
  }, []);

  const [events, setEvents] = useState<any>([]);
  const [vacant, setVacant] = useState<boolean>(false);
  const [vacantTime, setVacantTime] = useState<string | null>(null);

  const now = new Date(Date.now());

  useEffect(() => {
    if (!env) return;
    document.title = env?.TEXT.TITLE ?? "Evexi";

    document.documentElement.style.setProperty(
      "--font-color-primary",
      env?.COLORS.FONT_COLOR_PRIMARY ?? "#000000"
    );

    document.documentElement.style.setProperty(
      "--font-color-secondary",
      env?.COLORS.FONT_COLOR_SECONDARY ?? "#000000"
    );

    document.documentElement.style.setProperty(
      "--font-color-muted",
      env?.COLORS.FONT_COLOR_MUTED ?? "#000000"
    );

    document.documentElement.style.setProperty(
      "--primary-color",
      env?.COLORS.PRIMARY_COLOR ?? "#000000"
    );

    document.documentElement.style.setProperty(
      "--secondary-color",
      env?.COLORS.SECONDARY_COLOR ?? "#000000"
    );
    document.documentElement.style.setProperty(
      "--tertiary-color",
      env?.COLORS.TERTIARY_COLOR ?? "#000000"
    );

    async function getEvents() {
      const { API_KEY, CID } = env?.API;
      if (!API_KEY || !CID) return;

      const tomorrow = now.getTime() + 60 * 60 * 24 * 1000;

      const res = await axios.get(
        `https://www.googleapis.com/calendar/v3/calendars/${
          env?.API.CID
        }/events?key=${
          env?.API.API_KEY
        }&orderBy=startTime&singleEvents=true&maxResults=5&timeMin=${now.toISOString()}&timeMax=${new Date(
          tomorrow
        ).toISOString()}`
      );

      if (res.data.items.length === 0) return;
      setEvents(res.data.items);
      const start = Date.parse(res.data.items[0]["start"]["dateTime"]);
      const end = Date.parse(res.data.items[0]["end"]["dateTime"]);
      const nowTime = Date.now();
      if (nowTime >= start && nowTime <= end) {
        setVacant(false);
      } else {
        setVacant(true);
        const diff = getDateDifference(
          Date.parse(res.data.items[0]["start"]["dateTime"]),
          new Date().getTime()
        );
        setVacantTime(diff);
      }
    }
    getEvents();
  }, [env]);

  const showTime = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(now);

  return env ? (
    <div className="container">
      <div className="left-container">
        <div className="navbar-container">
          <div className="navbar">
            <div className="image-container">
              <img src={env?.LOGO} alt="logo" />
            </div>
            <div className="time-container">
              <h1 className="time-header">{showTime}</h1>
              <span className="time-desc">
                {new Intl.DateTimeFormat("en-GB", {
                  dateStyle: "full",
                }).format(new Date(Date.now()))}
              </span>
            </div>
          </div>
        </div>
        <div className="meeting-container">
          <h1>{env.TEXT.MEETING_ROOM_NAME}</h1>
        </div>
        <div className="progress-container">
          {vacant ? (
            <>
              <h4>Vacant for the next</h4>
              <h1 className="progress_time-text">{vacantTime}</h1>
            </>
          ) : (
            <>
              {events.length === 0 ? (
                <h4 className="progress_time-text">No upcoming events</h4>
              ) : (
                <>
                  <h4>Meeting in progress</h4>
                  <h1 className="progress_time-text">
                    {events[0] &&
                      new Intl.DateTimeFormat("en-GB", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: false,
                      }).format(
                        new Date(Date.parse(events[0]["start"]["dateTime"]))
                      )}
                    -{" "}
                    {new Intl.DateTimeFormat("en-GB", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: false,
                    }).format(
                      new Date(Date.parse(events[0]["end"]["dateTime"]))
                    )}
                  </h1>

                  <h2 className="progress-title">
                    {events[0] && events[0].summary}
                  </h2>
                </>
              )}
            </>
          )}
        </div>
        <div className="upcoming-container">
          <div className="upcoming active">
            <div className="upcoming-content">
              <h4>Up Next</h4>
              <h1 className="progress_time-text" id="upcoming">
                {events[vacant ? 0 : 1] ? (
                  <>
                    {new Intl.DateTimeFormat("en-GB", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: false,
                    }).format(Date.parse(events[0]["start"]["dateTime"]))}{" "}
                    -
                    {new Intl.DateTimeFormat("en-GB", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: false,
                    }).format(Date.parse(events[0]["end"]["dateTime"]))}
                  </>
                ) : (
                  "No upcoming events"
                )}
              </h1>
              <h2 className="progress-title">
                {!vacant
                  ? events[1] && events[1].summary
                  : events[0] && events[0].summary}
              </h2>
            </div>
          </div>
        </div>
        <div className="booking-container">
          <div className="booking-content">
            <span className="booking-subtitle">Book your slot at </span>
            <span className="booking-text">{env.TEXT.BOOKING_TEXT}</span>
          </div>
        </div>
      </div>
      <div className="right-container">
        <h1 className="right_container-header">Today's Schedule</h1>
        <div className="schedule-container">
          {events.length > 0 ? (
            events.map((e: any, i: number) => {
              const startDate = new Intl.DateTimeFormat("gb-EN", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              }).format(new Date(Date.parse(e["start"]["dateTime"])));
              const endDate = new Intl.DateTimeFormat("gb-EN", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              }).format(new Date(Date.parse(e["end"]["dateTime"])));

              return (
                <div className={`meeting_schedule-container`} key={i}>
                  <h1>
                    <span>{startDate}</span>-<span>{endDate}</span>
                  </h1>
                  <h3>{e.summary}</h3>
                </div>
              );
            })
          ) : (
            <>
              <h1 className="time-header center ">No upcoming events</h1>
            </>
          )}
          <span className="schedule-subtitle">
            Available for booking{" "}
            <span className="schedule-text">{env.TEXT.BOOKING_TEXT}</span>
          </span>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default App;
