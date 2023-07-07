import "./App.css";
import "./fonts/montserrat/Montserrat-Bold.ttf";

function App() {
  return (
    <div className="container">
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
                dateStyle: "long",
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
    </div>
  );
}

export default App;
