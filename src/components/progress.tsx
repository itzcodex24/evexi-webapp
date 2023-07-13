import { formatTime } from "../helpers/format-time";

type ProgressProps = {
  vacant: boolean | string;
  events: any;
};

export default function Progress(props: ProgressProps) {
  const { vacant, events } = props;

  return (
    <div className="progress-container">
      {vacant ? (
        <>
          <h4>Vacant for the next</h4>
          <h1 className="progress_time-text">{vacant}</h1>
        </>
      ) : (
        <>
          {events.items.length === 0 ? (
            <h4 className="progress_time-text">No upcoming events</h4>
          ) : (
            <>
              <h4>Meeting in progress</h4>
              <h1 className="progress_time-text">
                {events.items[0] &&
                  formatTime(
                    new Date(Date.parse(events.items[0]["start"]["dateTime"]))
                  )}
                -{" "}
                {formatTime(
                  new Date(Date.parse(events.items[0]["end"]["dateTime"]))
                )}
              </h1>

              <h2 className="progress-title">
                {events.items[0] && events.items[0].summary}
              </h2>
            </>
          )}
        </>
      )}
    </div>
  );
}
