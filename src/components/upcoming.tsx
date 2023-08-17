import { formatTime } from "../helpers/format-time";
import { isBetweenTimes } from "../helpers/isBetweenTimes";

const GetUpNextIndex = (events: EventItem[]) => {
  let sortedEvents =
    events.length > 0 &&
    events.sort((a, b) => {
      return Date.parse(a.created) - Date.parse(b.created);
    });
  if (sortedEvents) {
    for (let i = 0; i < sortedEvents.length; i++) {
      if (sortedEvents[i + 1]) {
        if (sortedEvents[i].end.dateTime !== sortedEvents[i + 1].end.dateTime) {
          if (
            !isBetweenTimes(
              Date.parse(sortedEvents[i].start.dateTime),
              Date.now(),
              Date.parse(sortedEvents[i].end.dateTime),
            )
          ) {
            return i;
          } else {
            return i + 1;
          }
        } else {
          if (
            !isBetweenTimes(
              Date.parse(sortedEvents[i].start.dateTime),
              Date.now(),
              Date.parse(sortedEvents[i].end.dateTime),
            )
          ) {
            return i;
          } else {
            return -1;
          }
        }
      } else {
        if (
          !isBetweenTimes(
            Date.parse(sortedEvents[i].start.dateTime),
            Date.now(),
            Date.parse(sortedEvents[i].end.dateTime),
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
