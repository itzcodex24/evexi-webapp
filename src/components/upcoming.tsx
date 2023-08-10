import { formatTime } from "../helpers/format-time";
import { isBetweenTimes } from "../helpers/isBetweenTimes";

export default function Upcoming({ events }: { events: EventItem[] }) {
  let index: number;

  if (events.length === 0) {
    index = 0;
  } else {
    if (
      isBetweenTimes(
        Date.parse(events[0].start.dateTime),
        Date.now(),
        Date.parse(events[0].end.dateTime),
      )
    ) {
      index = 1;
    } else {
      index = 0;
    }
  }

  return (
    <div className="upcoming-container">
      <div className="upcoming ">
        <div className="upcoming-content">
          {events.length > 0 ? (
            events[index] ? (
              <>
                <h1>Up next</h1>
                <h1 className="progress_time-text" id="progress">
                  {formatTime(Date.parse(events[index]["start"]["dateTime"]))}-{" "}
                  {formatTime(Date.parse(events[index]["end"]["dateTime"]))}
                </h1>
                <h2 className="progress-title">
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
