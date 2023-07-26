import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Evexi } from "evexi";
import { initEvexi } from "./evexi/init";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const load = async () => {
  if (!!process.env.REACT_APP_IS_DEV) {
    initEvexi("Starbucks");
  }

  try {
    const COLORS = await Evexi.env("COLORS");
    const API_KEY = await Evexi.env("API_KEY");
    const calender_id = await Evexi.env("CID");
    const LOGO = await Evexi.env("LOGO");
    const TEXT = await Evexi.env("TEXT");

    return {
      COLORS,
      API_KEY,
      CID: calender_id,
      LOGO,
      TEXT,
    };
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

load().then((config) => {
  root.render(
    <React.StrictMode>
      <App config={config} />
    </React.StrictMode>
  );
});
