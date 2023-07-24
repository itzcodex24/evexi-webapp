declare interface EventAPI {
  items: EventItem[];
}

declare interface EventItem {
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
  summary: string;
}
