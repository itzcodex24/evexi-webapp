import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Evexi } from "evexi";
import { initEvexi } from "./evexi/init";

export interface Config {
  ERROR: string | undefined;
  GOOGLE_API_KEY: string | undefined;
  GOOGLE_CALENDAR_ID: string | undefined;
  OFFICE_API_KEY: string | undefined;
  LOGO: string | undefined;
  TEXT: string | undefined;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const load = async () => {
  if (process.env.NODE_ENV !== "production") {
    initEvexi("Starbucks");
  }

  try {
    const COLOURS = await Evexi.env("COLOURS");
    const GOOGLE_API_KEY = await Evexi.env("GOOGLE_API_KEY");
    const GOOGLE_CALENDAR_ID = await Evexi.env("GOOGLE_CALENDAR_ID");
    const OFFICE_API_KEY = await Evexi.env("OFFICE_API_KEY");
    const LOGO = await Evexi.env("LOGO");
    const TEXT = await Evexi.env("TEXT");
    let error: string | undefined = undefined;

    try {
      JSON.parse(TEXT ?? "{}");
    } catch (err) {
      error = "Invalid values set for TEXT variable";
    }

    try {
      const colors = JSON.parse(COLOURS ?? "{}");
      Object.entries(colors).forEach(([k, v]) => {
        const key = `--${k.replace(/_/g, "-").toLowerCase()}`;
        document.documentElement.style.setProperty(key, v as string);
      });
    } catch (err) {
      error = "Invalid values set for COLOURS variable";
    }

    if (!GOOGLE_API_KEY && !OFFICE_API_KEY) {
      error =
        "Please use at least one valid source for your calendar! Either specify the GOOGLE_API_KEY or OFFICE_API_KEY environment variable.";
    }

    return {
      ERROR: error,
      GOOGLE_API_KEY,
      GOOGLE_CALENDAR_ID,
      OFFICE_API_KEY,
      LOGO,
      TEXT,
    } as Config;
  } catch (err) {
    throw Error(err as any);
  }
};

load()
  .then((config) => {
    root.render(
      <React.StrictMode>
        <App config={config} />
      </React.StrictMode>,
    );
  })
  .catch((err) => {});
