import { formatTime } from "../helpers/format-time";
import { isBetweenTimes } from "../helpers/isBetweenTimes";

const GetUpNextIndex = (events: EventItem[]) => {
  const inMeeting = (i: number) =>
    isBetweenTimes(
      Date.parse(events[i].start.dateTime),
      Date.now(),
      Date.parse(events[i].end.dateTime),
    );

  if (events.length === 0) return -1;

  if (events.length === 1) {
    if (inMeeting(0)) return -1;

    return 0;
  }

  for (let i = 0; i < events.length; i++) {
    if (
      events[i].end.dateTime === events[i + 1].end.dateTime &&
      events[i].start.dateTime === events[i + 1].start.dateTime
    ) {
      if (!inMeeting(i)) return i;

      return events.indexOf(
        events.filter((e) => e.end.dateTime !== events[i].end.dateTime)[0],
      );
    } else {
      if (inMeeting(i)) return i + 1;
      return i;
    }
  }
};

export default function Upcoming({ events }: { events: EventItem[] }) {
  let index = GetUpNextIndex(events);
  if (!index) index = 0;

  return (
    <div className="upcoming-container">
      <div className="upcoming ">
        <div className="upcoming-content">
          {events.length > 0 ? (
            events[index] ? (
              <>
                <h1>Up next</h1>
                <h1 className="progress_time-text" id="progress">
                  {formatTime(
                    Date.parse(events[index]["start"]["dateTime"]),
                    events[index].start.timeZone,
                  )}
                  -{" "}
                  {formatTime(
                    Date.parse(events[index]["end"]["dateTime"]),
                    events[index].end.timeZone,
                  )}
                </h1>
                <h2 className="progress-title clamp-1">
                  {events[index]["summary"] ?? "Untitled Event"}
                </h2>
              </>
            ) : (
              <h1 className="progress_time-text" id="progress">
                No upcoming meetings
              </h1>
            )
          ) : (
            <h1 className="progress_time-text" id="progress">
              No upcoming meetings
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
