import { useEffect, useState } from "react";
import "./App.css";
import "./fonts/montserrat/Montserrat-Bold.ttf";
import axios from "axios";
// eslint-disable-next-line

function getDateDifference(date1: any, date2: any) {
  const diffInMilli = Math.abs(date2 - date1);
  const minutes = Math.floor(diffInMilli / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;

  if (days === 0 && remainingHours === 0) {
    return `${remainingMinutes} minutes`;
  } else if (days === 0) {
    return `${remainingHours} hours, ${remainingMinutes} minutes`;
  }

  return `${days} days, ${remainingHours} hours, ${remainingMinutes} minutes`;
}

function App() {
  useEffect(() => {
    document.title = "Starbucks Meeting Room";
  }, []);

  const api_key = "AIzaSyCQJFvN3AAYRc4rQiz8lzhjrKg1lTKZbPg";
  const cal_id = "andrei.cherciu24@gmail.com";

  const [events, setEvents] = useState<any>([]);
  const [vacant, setVacant] = useState<boolean>(false);
  const [vacantTime, setVacantTime] = useState<string | null>(null);

  const now = new Date(Date.now());

  useEffect(() => {
    async function getEvents() {
      const tomorrow = now.getTime() + 60 * 60 * 24 * 1000;
      const res = await axios.get(
        `https://www.googleapis.com/calendar/v3/calendars/${cal_id}/events?key=${api_key}&orderBy=startTime&singleEvents=true&timeMin=${now.toISOString()}&timeMax=${new Date(
          tomorrow
        ).toISOString()}`
      );

      console.log(res.data.items);
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
  }, []);

  const showTime = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(now);

  return (
    <div className="container">
      <div className="left-container">
        <div className="navbar-container">
          <div className="navbar">
            <div className="image-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png"
                alt="logo"
              />
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
          <h1>Meeting room one</h1>
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
            <span>
              <a href="#"> startbucks.meetingroom.com</a>
            </span>
          </div>
        </div>
      </div>
      <div className="right-container">
        <h1 className="right_container-header">Today's Schedule</h1>
        <div className="schedule-container">
          {events.map((e: any, i: number) => {
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
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
