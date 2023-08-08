import { useMemo } from "react";
import { formatTime } from "../helpers/format-time";

type UpcomingProps = {
  upNextIndex: number;
  events: EventAPI;
  vacant: boolean | string;
};

export default function Upcoming(props: UpcomingProps) {
  const { upNextIndex, events, vacant } = props;

  return (
    <div className="upcoming-container">
      <div className="upcoming ">
        <div className="upcoming-content">
          <h4>Up Next</h4>
          <h1 className="progress_time-text" id="upcoming">
            {events.items[upNextIndex] &&
            new Date().setHours(23, 59, 59) >=
              Date.parse(events.items[upNextIndex].start.dateTime) &&
            new Date().setHours(0, 0, 0) <=
              Date.parse(events.items[upNextIndex].start.dateTime) ? (
              <>
                {formatTime(
                  Date.parse(events.items[upNextIndex]["start"]["dateTime"]),
                )}{" "}
                -{" "}
                {formatTime(
                  Date.parse(events.items[upNextIndex]["end"]["dateTime"]),
                )}
              </>
            ) : (
              "No upcoming events"
            )}
          </h1>
          {events.items[upNextIndex] && (
            <h2 className="progress-title">
              {!vacant
                ? (events.items[1] && events.items[1].summary) ??
                  "Untitled Event"
                : (events.items[0] && events.items[0].summary) ??
                  "Untitled Event"}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}
