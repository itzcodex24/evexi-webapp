export function formatTime(date: Date | number) {
  return new Intl.DateTimeFormat("gb-EN", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(date);
}
