export function formatTime(
  date: Date | number,
  timeZone: string | undefined = undefined,
) {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone,
  }).format(date);
}
