# This file highlights the possible properties which can be set through the Evexi Admin Portal.

These can be changed in `src/evexi/init.ts`

## Possible properties.

- TO NOTE: Default to colors is #ff0000 (RED)

| Key     | Value                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API_KEY | api_key                                                                                                                                                                                                                                                                                                                                                                                                                |
| CID     | google_calendar_id                                                                                                                                                                                                                                                                                                                                                                                                     |
| TEXT    | "{BOOKING_TEXT: "", MEETING_ROOM_NAME: ""}"                                                                                                                                                                                                                                                                                                                                                                            |
| COLORS  | "{SCHEDULE_BACKGROUND_COLOR: "", PRIMARY_FONT_COLOR_SCHEDULE: "", SECONDARY_FONT_COLOR_SCHEDULE: "", SCHEDULE_BACKGROUND_CONTAINER_COLOR: "", MUTED_FONT_COLOR_SCHEDULE: "", BACKGROUND_MAIN: "", PRIMARY_FONT_COLOR: "", SECONDARY_FONT_COLOR: "", MUTED_FONT_COLOR: "", PROGRESS_BACKGROUND_COLOR: "", PROGRESS_FONT_COLOR: "", BOOKING_FONT_COLOR: "", BOOKING_MUTED_FONT_COLOR: "", BOOKING_BACKGROUND_COLOR: ""}" |
| LOGO    | logo                                                                                                                                                                                                                                                                                                                                                                                                                   |

See example config below:

```ts
    API_KEY: "HsdAWdasAWgASdasdwDDsad",
    CID: "john.smith@gmail.com",
    TEXT: JSON.stringify({
      BOOKING_TEXT: "sky.meeting.com",
      MEETING_ROOM_NAME: "room one",
    }),

    COLOURS: JSON.stringify({
      SCHEDULE_BACKGROUND_COLOR: "linear-gradient(to bottom, darkblue,#091351)",
      PRIMARY_FONT_COLOR_SCHEDULE: "white",
      SECONDARY_FONT_COLOR_SCHEDULE: "black",
      SCHEDULE_BACKGROUND_CONTAINER_COLOR: "white",
      MUTED_FONT_COLOR_SCHEDULE: "gray",
      BACKGROUND_MAIN: "white",
      PRIMARY_FONT_COLOR: "gray",
      SECONDARY_FONT_COLOR: "orange",
      MUTED_FONT_COLOR: "#a0a0a0",
      PROGRESS_BACKGROUND_COLOR: "rgba(0,0,0,0.2)",
      PROGRESS_FONT_COLOR: "black",
      BOOKING_FONT_COLOR: "white",
      BOOKING_MUTED_FONT_COLOR: "gray",
      BOOKING_BACKGROUND_COLOR: "#0000aa",
    }),
    LOGO: "data:image/png;base64..."
```
