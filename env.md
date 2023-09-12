# ENV documentation

_These can be changed in `src/evexi/init.ts`_

## Possible properties.

| KEY                | VALUE              | REQUIRED |
| ------------------ | ------------------ | -------- |
| GOOGLE_API_KEY     | GOOGLE API KEY     | NO       |
| GOOGLE_CALENDAR_ID | GOOGLE CALEDAR ID  | NO       |
| OFFICE_API_KEY     | OFFICE 365 API KEY | NO       |
| TEXT               | SEE BELOW          | NO       |
| COLOURS            | SEE BELOW          | NO       |
| LOGO               | LOGO BASE64        | NO       |

## TEXT

<img src="https://i.imgur.com/YiasVdM.png" alt="Demo Image" />

| KEY               |
| ----------------- |
| MEETING_ROOM_NAME |
| BOOKING_TEXT      |

### Below is a sample config which uses the text properties:

```ts
    TEXT: JSON.stringify({
        BOOKING_TEXT: "book.this.room.com"
        MEETING_ROOM_NAME: "Conference Room #1"
    })
```

## COLOURS

| KEY                                 |
| ----------------------------------- |
| SCHEDULE_BACKGROUND_COLOR           |
| PRIMARY_FONT_COLOR_SCHEDULE         |
| SECONDARY_FONT_COLOR_SCHEDULE       |
| SCHEDULE_BACKGROUND_CONTAINER_COLOR |
| MUTED_FONT_COLOR_SCHEDULE           |
| BACKGROUND_MAIN                     |
| PRIMARY_FONT_COLOR                  |
| SECONDARY_FONT_COLOR                |
| MUTED_FONT_COLOR                    |
| PROGRESS_BACKGROUND_COLOR           |
| PROGRESS_FONT_COLOR                 |
| BOOKING_FONT_COLOR                  |
| BOOKING_BACKGROUND_COLOR            |
| BOOKING_MUTED_FONT_COLOR            |

### Below is a sample config which uses the colours:

```ts
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
});
```

### Pre-built configs

<img src="https://i.imgur.com/YiasVdM.png" alt="Demo Image" />

```ts
    GOOGLE_API_KEY: "YOUR_API_KEY",
    GOOGLE_CALENDAR_ID: "YOUR_CALENDAR_ID",
    OFFICE_API_KEY: "YOUR_API_KEY"
    TEXT: `{
      "BOOKING_TEXT": "starbucks.meeting.com",
      "MEETING_ROOM_NAME": "Conference Room #1"
    }`,
    COLOURS: JSON.stringify({
      SCHEDULE_BACKGROUND_COLOR: "white",
      PRIMARY_FONT_COLOR_SCHEDULE: "#2e6a4e",
      SECONDARY_FONT_COLOR_SCHEDULE: "black",
      SCHEDULE_BACKGROUND_CONTAINER_COLOR: "white",
      MUTED_FONT_COLOR_SCHEDULE: "gray",
      BACKGROUND_MAIN: "#243735",
      PRIMARY_FONT_COLOR: "white",
      SECONDARY_FONT_COLOR: "white",
      MUTED_FONT_COLOR: "#a0a0a0",
      PROGRESS_BACKGROUND_COLOR: "white",
      PROGRESS_FONT_COLOR: "white",
      BOOKING_FONT_COLOR: "white",
      BOOKING_BACKGROUND_COLOR: "transparent",
      BOOKING_MUTED_FONT_COLOR: "gray",
    }),
    LOGO: "data:image/"
```
