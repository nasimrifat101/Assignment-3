export const CalculateAmount = (
  startTime: string,
  endTime: string,
  pricePerHour: number
) => {
  const start = new Date(startTime).getTime();
  const end = new Date(endTime).getTime();
  const duration = end - start / (1000 * 60 * 60);
  const payable = duration * pricePerHour;
  return payable;
};
