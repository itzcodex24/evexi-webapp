import "./App.css";
import "./fonts/montserrat/Montserrat-Bold.ttf";

function App() {
  return (
    <div className="container">
      <div className="left-container">
        <div className="navbar-container">
          <div className="navbar">
            <div className="image-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png"
                alt="logo"
              />
            </div>
            <div className="time-container">
              <h1 className="time-header">11:52am</h1>
              <span className="time-desc">
                {new Intl.DateTimeFormat("en-GB", {
                  dateStyle: "full",
                }).format(new Date(Date.now()))}
              </span>
            </div>
          </div>
        </div>
        <div className="meeting-container">
          <h1>Meeting room one</h1>
        </div>
        <div className="progress-container">
          <h4>Meeting in progress</h4>
          <h1 className="progress_time-text">11:30am - 12:30pm</h1>
          <h2 className="progress-title">Online Strategy</h2>
        </div>
        <div className="upcoming-container">
          <div className="upcoming">
            <div className="upcoming-content">
              <h4>Up Next</h4>
              <h1 className="progress_time-text">11:30am - 12:30pm</h1>
              <h2 className="progress-title">Marketing Strategy</h2>
            </div>
          </div>
        </div>
        <div className="booking-container">
          <div className="booking-content">
            <span className="booking-subtitle">Book your slot at </span>
            <span>
              <a href="#"> startbucks.meetingroom.com</a>
            </span>
          </div>
        </div>
      </div>
      <div className="right-container">
        <h1 className="right_container-header">Today's Schedule</h1>
      </div>
    </div>
  );
}

export default App;
