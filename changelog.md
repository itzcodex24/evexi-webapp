## [v0.1.10]

- Added auto scroll on the schedule container in case there are multiple events and these are overflowing

## [v0.1.9]

- Updated text across app per QA request.
- Resolved filtered events bug, where events set at 12:00AM were not being rendered.

## [v0.1.8]

- Added verification for the `COLOURS` and `TEXT`env variables to ensure the config is initialised corrently, and warning the user if not
- Updated documentation for the env variables

## [v0.1.7]

- Started handling 403 and 429 errors for rate limitations.
- Increased interval time for fetching data from 30 to 60 seconds.
- Improved styling on the right container with the sche display.
-

## [v0.1.6]

- Updated API to fetch all of the events registered for today.
- Reworked `Upcoming` and `Progress` components to work with this new data.

## [v0.1.5]

- Updated documentation to help user setup extra calendars and configure them correctly with their respective calendar ID
- Updated env documentation to help user understand the right input for the environmental variables

## [v0.1.4]

- Filtered events under Today's Schedule to only show items starting today between 12AM and 11:59PM
- Removed max results limitations.
- Added line clamping for overflowing text.
- Added helper function to check of any overlap between meetings from the google calendar.

## [v0.1.3]

- Updated env.md file to show demo API Key.

## [v0.1.2]

- Changes spelling of "COLOR" to "COLOUR".
- Updated default styling to show the Starbucks config.
- Replaced logo in navbar with text if source is null.
