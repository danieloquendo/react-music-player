export const secondsFormat = (milliSeconds: number): string => {
  const minute = Math.floor((milliSeconds % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((milliSeconds % (1000 * 60)) / 1000);
  return `${minute}:${second}`;
};
