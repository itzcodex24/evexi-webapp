import { formatTime } from "../helpers/format-time";

type ScheduleContainerProps = {
  vacant: boolean | string;
  events: EventAPI;
  text: string;
};

export default function ScheduleContainer(props: ScheduleContainerProps) {
  const { events, vacant, text } = props;

  let filteredEvents = events.items.filter((e: EventItem) => {
    const endOfToday = new Date().setHours(23, 59, 59);
    const startOfToday = new Date().setHours(0, 0, 0);
    const eventStart = Date.parse(e.start.dateTime);

    if (endOfToday >= eventStart && startOfToday <= eventStart) {
      return e;
    }
  });

  return (
    <div className="right-container">
      <div className="schedule-container">
        <h1 className="right_container-header">Today's Schedule</h1>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((e: EventItem, i: number) => {
            const startDate = formatTime(
              new Date(Date.parse(e["start"]["dateTime"])),
            );
            const endDate = formatTime(
              new Date(Date.parse(e["end"]["dateTime"])),
            );
            return (
              <>
                <div className={`meeting_schedule-container`} key={i}>
                  <h1>
                    <span>{startDate}</span>-<span>{endDate}</span>
                  </h1>

                  <h3 className="clamp-1">{e.summary ?? "Untitled Event"}</h3>
                  {!vacant && i === 0 && (
                    <div className="meeting_schedule-active">
                      <div className="active-button">・</div>
                      <h4>NOW</h4>
                    </div>
                  )}
                </div>
                {filteredEvents.length === 1 ? (
                  <span className="schedule-subtitle">
                    Available for booking{" "}
                    <span className="schedule-text">{text}</span>
                  </span>
                ) : !filteredEvents[i + 1] ? (
                  <span className="schedule-subtitle">
                    Available for booking{" "}
                    <span className="schedule-text">{text}</span>
                  </span>
                ) : filteredEvents[i].end.dateTime !==
                  filteredEvents[i + 1].start.dateTime ? (
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
            <h1 className="time-header center">No upcoming events</h1>
          </>
        )}
      </div>
    </div>
  );
}
