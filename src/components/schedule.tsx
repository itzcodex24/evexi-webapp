import { useEffect, useState } from "react";
import { formatTime } from "../helpers/format-time";
import { isBetweenTimes } from "../helpers/isBetweenTimes";

type ScheduleContainerProps = {
  vacant: boolean | string;
  events: EventItem[];
  text: string;
};

export default function ScheduleContainer(props: ScheduleContainerProps) {
  const { events, text } = props;
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);

  useEffect(() => {
    for (let i = 0; i < events.length; i++) {
      const oneHourAgo = new Date().setHours(new Date().getHours() - 1);
      const eventStart = Date.parse(events[i].start.dateTime);

      if (eventStart >= oneHourAgo) {
        setActiveEvent(events[i]);
        break;
      } else {
        setActiveEvent(null);
      }
    }
  }, []);

  useEffect(() => {
    if (activeEvent) {
      const activeMeeting = document.getElementById(
        `meeting-id-${events.indexOf(activeEvent)}`,
      );

      if (activeMeeting) {
        activeMeeting.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    } else {
      const activeMeeting = document.getElementById(`meeting-id-0`);

      if (activeMeeting) {
        activeMeeting.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  }, [activeEvent]);

  return (
    <div className="right-container">
      <div className="schedule-container">
        <h1 className="right_container-header">Today's Schedule</h1>
        {events.length > 0 ? (
          events.map((_, i: number) => {
            let ordered = [...events];
            if (
              ordered[i + 1] &&
              ordered[i].end.dateTime === ordered[i + 1].end.dateTime &&
              ordered[i].start.dateTime === ordered[i + 1].start.dateTime
            ) {
              ordered = ordered.sort(
                (a, b) => Date.parse(a.created) - Date.parse(b.created),
              );
            }
            const startDate = formatTime(
              new Date(Date.parse(ordered[i]["start"]["dateTime"])),
              ordered[i].start.timeZone,
            );
            const endDate = formatTime(
              new Date(Date.parse(ordered[i]["end"]["dateTime"])),
              ordered[i].end.timeZone,
            );

            const takingPlace = isBetweenTimes(
              Date.parse(ordered[i].start.dateTime),
              Date.now(),
              Date.parse(ordered[i].end.dateTime),
            );

            return (
              <>
                <div
                  className={`meeting_schedule-container`}
                  key={i}
                  id={`meeting-id-${i}`}
                >
                  <h1>
                    <span>{startDate}</span>-<span>{endDate}</span>
                  </h1>

                  <h3 className="clamp-1">
                    {ordered[i].summary ?? "Untitled Event"}
                  </h3>
                  {takingPlace && (
                    <div className="meeting_schedule-active">
                      <div className="active-button">・</div>
                      <h4>NOW</h4>
                    </div>
                  )}
                </div>
                {ordered.length === 1 ? (
                  <span className="schedule-subtitle">
                    Available for booking{" "}
                    <span className="schedule-text">{text}</span>
                  </span>
                ) : !ordered[i + 1] ? (
                  <span className="schedule-subtitle">
                    Available for booking{" "}
                    <span className="schedule-text">{text}</span>
                  </span>
                ) : ordered[i].end.dateTime !== ordered[i + 1].start.dateTime &&
                  ordered[i].start.dateTime !==
                    ordered[i + 1].start.dateTime ? (
                  <span className="schedule-subtitle">
                    Available for booking{" "}
                    <span className="schedule-text">{text}</span>
                  </span>
                ) : null}
              </>
            );
          })
        ) : (
          <>
            <h1 className="time-header-schedule center">
              No upcoming meetings
            </h1>
          </>
        )}
      </div>
    </div>
  );
}
