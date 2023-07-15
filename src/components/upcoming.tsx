import { formatTime } from "../helpers/format-time";

type UpcomingProps = {
  upNextIndex: number;
  events: any;
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
            {events.items[upNextIndex] ? (
              <>
                {formatTime(
                  Date.parse(events.items[upNextIndex]["start"]["dateTime"])
                )}{" "}
                -{" "}
                {formatTime(
                  Date.parse(events.items[upNextIndex]["end"]["dateTime"])
                )}
              </>
            ) : (
              "No upcoming events"
            )}
          </h1>
          <h2 className="progress-title">
            {!vacant
              ? events.items[1] && events.items[1].summary
              : events.items[0] && events.items[0].summary}
          </h2>
        </div>
      </div>
    </div>
  );
}
