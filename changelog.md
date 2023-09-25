## [v1.1.0-alpha.1]
- Added ENV variables inside `.env` when in development
- Getting data back from Office 365 Calendar
- Added ENV variables for Office 365 Calendar Support
- Updated ENV [documentation](env.md)

## [v1.0.0]
- Released stable version

## [v0.1.16]
- Resolved issues with sorting on the schedule container

## [v0.1.15]
- Resolved mutation issues within the progress component
- Resolved bug from version 0.1.14, where events were placed in the wrong order.

## [v0.1.14]
- Resolves bugs where events were not sorted based on their creation date.

## [v0.1.13]
- Resolves further issues with overlapping events.
- Improves time formatting for timeZones received from the API

## [v0.1.12]
- Resolved bug with incorrect data showing up in the up next container when meetings were over running.
- Changed default text color for some text which was showing up as white and thus making it invisible.

## [v0.1.11]
- Resolves UI bugs with font sizes.
- Resolved transparency bugs with default colours.
- Resolved text overflowing issue on the up next container

## [v0.1.10]
- Added auto scroll on the schedule container in case there are multiple events and these are overflowing
- Resolved bug where COLOURS or TEXT not provided would display an error

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
