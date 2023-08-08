declare interface EventAPI {
  items: EventItem[];
}

declare interface EventItem {
  created: string;
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
  summary: string;
}
