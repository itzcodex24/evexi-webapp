import { useEffect, useState } from "react";
import { formatTime } from "../helpers/format-time";

export default function Navbar({ logo }: { logo: string | null }) {
  const [time, setTime] = useState(new Date(Date.now()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="image-container">
          {logo ? <img src={logo} alt="logo" /> : <h1>LOGO</h1>}
        </div>
        <div className="time-container">
          <h1 className="time-header">{formatTime(time)}</h1>
          <span className="time-desc">
            {new Intl.DateTimeFormat("en-GB", {
              dateStyle: "full",
            }).format(new Date(Date.now()))}
          </span>
        </div>
      </div>
    </div>
  );
}
