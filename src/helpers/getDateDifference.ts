export function getDateDifference(date1: number, date2: number) {
  if (!date1 || !date2) return "No upcoming meetings";
  const diffInMilli = Math.abs(date2 - date1);
  const minutes = Math.floor(diffInMilli / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;

  if (remainingHours === 0 && remainingMinutes === 0 && days === 0) {
    return "Less than a minute";
  }

  if (days === 0 && remainingHours === 0) {
    return `${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`;
  } else if (days === 0) {
    return `${remainingHours} hour${
      remainingHours > 1 ? "s" : ""
    }, ${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`;
  }

  return `${days} day${days > 1 ? "s" : ""}, ${remainingHours} hour${
    remainingHours > 1 ? "s" : ""
  }, ${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`;
}
