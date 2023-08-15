declare interface EventAPI {
  items: EventItem[];
}

declare interface EventItem {
  created: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  summary: string;
}
