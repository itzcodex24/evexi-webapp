declare interface GoogleAPI {
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

declare interface OfficeItem {
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  subject: string;
}

declare interface OfficeAPI {
  value: OfficeItem[];
}
