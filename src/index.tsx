import React from "react";
import ReactDOM from "react-dom/client";
import Error from "./components/error"
import "./index.css";
import App from "./App";
import { Evexi } from "evexi";
import { initEvexi } from "./evexi/init";

export interface Config {
  ERROR: string | undefined;
  GOOGLE_API_KEY: string | undefined;
  GOOGLE_CALENDAR_ID: string | undefined;
  LOGO: string | undefined;
  TEXT: string | undefined;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const load = async () => {
  if (process.env.NODE_ENV !== "production") initEvexi("Bunsik");

  try {
    const COLOURS = await Evexi.env("COLOURS");
    const GOOGLE_API_KEY = await Evexi.env("GOOGLE_API_KEY");
    const GOOGLE_CALENDAR_ID = await Evexi.env("GOOGLE_CALENDAR_ID");
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

    return {
      ERROR: error,
      GOOGLE_API_KEY,
      GOOGLE_CALENDAR_ID,
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
  .catch(() => {
    root.render(
      <React.StrictMode>
        <Error text="Could not load" />
      </React.StrictMode>,
    );
  });


