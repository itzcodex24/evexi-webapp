import { formatTime } from "../helpers/format-time";

type ScheduleContainerProps = {
  vacant: boolean | string;
  events: any;
  text: string;
};

export default function ScheduleContainer(props: ScheduleContainerProps) {
  const { events, vacant, text } = props;
  return (
    <div className="right-container">
      <h1 className="right_container-header">Today's Schedule</h1>
      <div className="schedule-container">
        {events.items.length > 0 ? (
          events.items.map((e: any, i: number) => {
            const startDate = formatTime(
              new Date(Date.parse(e["start"]["dateTime"]))
            );
            const endDate = formatTime(
              new Date(Date.parse(e["end"]["dateTime"]))
            );
            return (
              <div className={`meeting_schedule-container`} key={i}>
                <h1>
                  <span>{startDate}</span>-<span>{endDate}</span>
                </h1>

                <h3>{e.summary}</h3>
                {!vacant && i === 0 && (
                  <div className="meeting_schedule-active">
                    <div className="active-button">・</div>
                    <h4>NOW</h4>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <>
            <h1 className="time-header center ">No upcoming events</h1>
          </>
        )}
        <span className="schedule-subtitle">
          Available for booking{" "}
          <span className="schedule-text">
            {text}
            {}
          </span>
        </span>
      </div>
    </div>
  );
}
