export const isBetweenTimes = (
  eventStartTime: number,
  now: number,
  eventEndTime: number,
) => {
  if (eventEndTime >= now && now >= eventStartTime) {
    return true;
  }
  return false;
};
