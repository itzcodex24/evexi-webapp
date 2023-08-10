import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Evexi } from "evexi";
import { initEvexi } from "./evexi/init";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const load = async () => {
  if (process.env.NODE_ENV !== "production") {
    initEvexi("Starbucks");
  }

  try {
    const COLORS = await Evexi.env("COLOURS");
    const API_KEY = await Evexi.env("API_KEY");
    const CID = await Evexi.env("CID");
    const LOGO = await Evexi.env("LOGO");
    const TEXT = await Evexi.env("TEXT");
    let error: string | undefined = undefined;

    try {
      JSON.parse(TEXT ?? "{}");
    } catch (err) {
      error = "Invalid values set for TEXT variable";
    }

    try {
      const colors = JSON.parse(COLORS ?? "{}");
      Object.entries(colors).map(([k, v]) => {
        const key = `--${k.replace(/_/g, "-").toLowerCase()}`;
        document.documentElement.style.setProperty(key, v as string);
      });
    } catch (err) {
      error = "Invalid values set for COLOURS variable";
    }

    if (!API_KEY || !CID) {
      error = "Missing API_KEY or CID";
    }

    return {
      error: error,
      COLORS,
      API_KEY,
      CID,
      LOGO,
      TEXT,
    };
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
