import { useEffect } from "react";

export default function auth() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.onload = function () {
      // @ts-ignore
      window.gapi.load("client", function () {
        // @ts-ignore
        window.gapi.client.init({
          apiKey: "AIzaSyCQJFvN3AAYRc4rQiz8lzhjrKg1lTKZbPg",
        });
      });
    };
  });
}
