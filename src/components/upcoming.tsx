import { formatTime } from "../helpers/format-time";
import { isBetweenTimes } from "../helpers/isBetweenTimes";

const GetUpNextIndex = (events: EventItem[]) => {
  if (events.length > 0) {
    for (let i = 0; i < events.length; i++) {
      if (events[i + 1]) {
        if (events[i].end.dateTime !== events[i + 1].end.dateTime) {
          if (
            !isBetweenTimes(
              Date.parse(events[i].start.dateTime),
              Date.now(),
              Date.parse(events[i].end.dateTime),
            )
          ) {
            return i;
          } else {
            return i + 1;
          }
        }
      } else {
        if (
          !isBetweenTimes(
            Date.parse(events[i].start.dateTime),
            Date.now(),
            Date.parse(events[i].end.dateTime),
          )
        ) {
          return i;
        } else {
          return -1;
        }
      }
    }
  } else return 0;
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
                  {formatTime(Date.parse(events[index]["start"]["dateTime"]))}-{" "}
                  {formatTime(Date.parse(events[index]["end"]["dateTime"]))}
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
