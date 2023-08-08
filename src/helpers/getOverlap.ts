type OverlapProps = {
  items: EventItem[];
};
export const getOverlap = ({ items }: OverlapProps): EventItem[] => {
  if (items.length > 1) {
    for (let i = 0; i < items.length - 1; i++) {
      const range1Start = Date.parse(items[i]["start"]["dateTime"]);
      const range1End = Date.parse(items[i]["end"]["dateTime"]);

      const range2Start = Date.parse(items[i + 1]["start"]["dateTime"]);
      const range2End = Date.parse(items[i + 1]["end"]["dateTime"]);

      if (range1Start < range2End && range2Start < range1End) {
        [items[i], items[i + 1]] = [items[i + 1], items[i]];
        return items;
      } else {
        return items;
      }
    }
  }
  return items;
};
