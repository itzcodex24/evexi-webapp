# This file highlights the possible properties which can be set through the Evexi Admin Portal.

These can be changed in `src/evexi/init.ts`

## Possible properties.

- TO NOTE: Default to colors is #000000

| Property                            | Type   | Example                                      |
| ----------------------------------- | ------ | -------------------------------------------- |
| API_KEY                             | string | AIzaSyCQJFRc4rQiz8lzhjrKg1lTKZb113           |
| CID                                 | string | john.smith@yahoo.com                         |
| BOOKING_TEXT                        | string | samsung.meeting.com                          |
| MEETING_ROOM_NAME                   | string | Room 1                                       |
| SCHEDULE_BACKGROUND_COLOR           | string | linear-gradient(to bottom, darkblue,#091351) |
| PRIMARY_FONT_COLOR_SCHEDULE         | string | white                                        |
| SECONDARY_FONT_COLOR_SCHEDULE       | string | black                                        |
| SCHEDULE_BACKGROUND_CONTAINER_COLOR | string | white                                        |
| MUTED_FONT_COLOR_SCHEDULE           | string | gray                                         |
| BACKGROUND_MAIN                     | string | white                                        |
| PRIMARY_FONT_COLOR                  | string | gray                                         |
| SECONDARY_FONT_COLOR                | string | orange                                       |
| MUTED_FONT_COLOR                    | string | gray                                         |
| PROGRESS_BACKGROUND_COLOR           | string | black                                        |
| PROGRESS_FONT_COLOR                 | string | black                                        |
| BOOKING_FONT_COLOR                  | string | white                                        |
| BOOKING_MUTED_FONT_COLOR            | string | gray                                         |
| BOOKING_BACKGROUND_COLOR            | string | blue                                         |
| LOGO                                | string | data:image/png;base64...                     |

See example config below:

```ts
    API: JSON.stringify({
      API_KEY: "AIzaSyCQJFvN3AAYRc4rQiz8lzhjrKg1lTKZbPg",
      CID: "andrei.cherciu24@gmail.com",
    }),
    TEXT: JSON.stringify({
      BOOKING_TEXT: "sky.meeting.com",
      MEETING_ROOM_NAME: "room one",
    }),

    COLORS: JSON.stringify({
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
