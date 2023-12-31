# Evexi Media Player

## Project details

- This project was built for displaying meetings and events pulled from Google Calendar using the Google Calendar API and displaying these for corporate clients
- It uses the Evexi NPM package and its API to pull environmental variables from the Evexi Admin Portal

## How to initialise

1. Sign into the Google Cloud Console [Google Cloud Console](https://console.developers.google.com/)
2. Get a free API Key at [Google Calendar API](https://console.cloud.google.com/apis/library/calendar-json.googleapis.com)
3. Clone the repo
   ```sh
   git clone https://github.com/itzcodex24/evexi-webapp
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your API and Calendar ID in `src/evexi/init.ts`

   ```ts
     API: JSON.stringify({
      API_KEY: "YOUR_API_KEY",
      CID: "YOUR_CALENDAR_ID",
    }),
   ```

6. Start the project

   ```sh
   npm run start
   ```

7. Ready to build for media player?
   ```sh
   npm run package
   ```

## Want to add multiple calendars?

- Under `Other Calendars` on the left, click the `+` icon.
- Select the `Create new calendar` option.
- Enter the calendar `name` and `description`.
- Click on `Create Calendar`.
- Wait until the calendar has been created, and exit out of settings.

- On the main page, under `My calendars` on the left, hover over the new calendar created and select the `⋮` icon.
- Click on `Settings and Sharing`.
- Under the `Access permissions for events` header, tick the `Make available to public` checkbox.
- Scroll down until you see your new Calendar ID.
- Update your config with the new calendar ID.

## Built with

- ReactJS
- Evexi API

## Documentation

The Evexi API documentation can be found [here]('https://github.com/Evexi/Evexi')
