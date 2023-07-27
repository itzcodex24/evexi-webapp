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
  if (process.env.NODE_ENV !== "production") {
    initEvexi("Starbucks");
  }

  try {
    const COLORS = await Evexi.env("COLORS");
    const API_KEY = await Evexi.env("API_KEY");
    const calender_id = await Evexi.env("CID");
    const LOGO = await Evexi.env("LOGO");
    const TEXT = await Evexi.env("TEXT");

    let colors = JSON.parse(COLORS ?? "{}");

    colors &&
      Object.entries(colors).map(([k, v]) => {
        const key = `--${k.replace(/_/g, "-").toLowerCase()}`;
        document.documentElement.style.setProperty(key, v as string);
      });

    return {
      error: !API_KEY || !calender_id ? "Missing API_KEY or CID" : "",
      COLORS,
      API_KEY,
      CID: calender_id,
      LOGO,
      TEXT,
    };
  } catch (err) {
    console.log(`Error : ${err}`);
    throw Error(err as any);
  }
};

load()
  .then((config) => {
    root.render(
      <React.StrictMode>
        <App config={config} />
      </React.StrictMode>
    );
  })
  .catch((err) => {
    console.log(err);
  });
