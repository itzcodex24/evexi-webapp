import { formatTime } from "../helpers/format-time";
import { getDateDifference } from "../helpers/getDateDifference";
import { isBetweenTimes } from "../helpers/isBetweenTimes";

export default function Progress({
  events,
}: {
  events: Readonly<EventItem[]>;
}) {
  return (
    <div className="progress-container">
      <div className="progress">
        {events.length > 0 ? (
          isBetweenTimes(
            Date.parse(events[0].start.dateTime),
            Date.now(),
            Date.parse(events[0].end.dateTime),
          ) ? (
            <>
              <h3 className="meeting-status">Order Number</h3>

              <h2 className="progress-title clamp-1 ">
                {events[0].summary ?? "Untitled Event"}
              </h2>
            </>
          ) : (
            <>
              <h4 className="meeting-status">Vacant for the next</h4>
              <h1 className="progress_time-text">
                {getDateDifference(
                  Date.parse(events[0].start.dateTime),
                  Date.now(),
                )}
              </h1>
            </>
          )
        ) : (
          <h4 className="progress_time-text">No pending orders</h4>
        )}
      </div>
    </div>
  );
}
