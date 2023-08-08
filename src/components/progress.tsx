import { useMemo } from "react";
import { formatTime } from "../helpers/format-time";
import { getDateDifference } from "../helpers/getDateDifference";
import { isBetweenTimes } from "../helpers/isBetweenTimes";

export default function Progress({ events }: { events: EventItem[] }) {
  return (
    <div className="progress-container">
      {events.length > 0 ? (
        isBetweenTimes(
          Date.parse(events[0].start.dateTime),
          Date.now(),
          Date.parse(events[0].end.dateTime),
        ) ? (
          <>
            <h4>Meeting in progress</h4>
            <h1 className="progress_time-text">
              {events[0] &&
                formatTime(
                  new Date(Date.parse(events[0]["start"]["dateTime"])),
                )}
              - {formatTime(new Date(Date.parse(events[0]["end"]["dateTime"])))}
            </h1>

            <h2 className="progress-title clamp-1">
              {events[0].summary ?? "Untitled Event"}
            </h2>
          </>
        ) : (
          <>
            <h4>Vacant for the next</h4>
            <h1 className="progress_time-text">
              {getDateDifference(
                Date.parse(events[0].start.dateTime),
                Date.now(),
              )}
            </h1>
          </>
        )
      ) : (
        <h4 className="progress_time-text">No upcoming meetings!</h4>
      )}
    </div>
  );
}
