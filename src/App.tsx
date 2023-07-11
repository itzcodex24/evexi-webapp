import { useEffect, useState } from "react";
import "./App.css";
import "./fonts/montserrat/Montserrat-Bold.ttf";
import { EvexiMock, Evexi } from "evexi";

type Meeting = {
  title: string | JSX.Element;
  startTime: Date;
  endTime: Date;
  gradient?: boolean;
  special?: boolean;
};

function App() {
  const evexi = new EvexiMock(Evexi);

  useEffect(() => {
    document.title = "Starbucks Meeting Room";
  }, []);

  const [vacant, setVacant] = useState<boolean>(false);

  const [meetings, setMeetings] = useState<Meeting[]>([
    {
      title: "Marketing Meeting",
      startTime: new Date("2021-08-25T10:30:00"),
      endTime: new Date("2021-08-25T11:30:00"),
    },
    {
      title: (
        <span className="schedule-subtitle">
          Available for booking <a href="#">starbucks.meetingroom.com</a>
        </span>
      ),
      startTime: new Date("2021-08-25T10:30:00"),

      endTime: new Date("2021-08-25T11:30:00"),
      special: true,
    },
    {
      title: "Marketing Meeting",
      startTime: new Date("2021-08-25T10:30:00"),
      endTime: new Date("2021-08-25T11:30:00"),
      gradient: true,
    },
    {
      title: "Marketing Meeting",
      startTime: new Date("2021-08-25T10:30:00"),
      endTime: new Date("2021-08-25T11:30:00"),
    },
    {
      title: "Marketing Meeting",
      startTime: new Date("2021-08-25T10:30:00"),
      endTime: new Date("2021-08-25T11:30:00"),
    },
  ]);

  const now = new Date(Date.now());

  const showTime = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(now);

  const value = +showTime.split(":")[0];

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
              <h1 className="time-header">
                {showTime} <span>{value > 12 ? "PM" : "AM"}</span>
              </h1>
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
          <h4>Meeting in progress</h4>
          <h1 className="progress_time-text">11:30am - 12:30pm</h1>
          <h2 className="progress-title">Online Strategy</h2>
        </div>
        <div className="upcoming-container">
          <div className="upcoming active">
            <div className="upcoming-content">
              <h4>Up Next</h4>
              <h1 className="progress_time-text" id="upcoming">
                11:30am - 12:30pm
              </h1>
              <h2 className="progress-title">Marketing Strategy</h2>
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
          {meetings.map((m, i) => (
            <>
              {m.special ? (
                <h1 key={i}>{m.title}</h1>
              ) : (
                <div
                  className={`meeting_schedule-container ${
                    m.gradient && "gradient"
                  }`}
                  key={i}
                >
                  <h1>
                    {new Intl.DateTimeFormat("en-GB", {
                      timeStyle: "short",
                      hour12: true,
                    }).format(m.startTime)}{" "}
                    -{" "}
                    {new Intl.DateTimeFormat("en-GB", {
                      timeStyle: "short",
                      hour12: true,
                    }).format(m.endTime)}
                  </h1>
                  <h3>{m.title}</h3>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
