export const CalculateAmount = (
  startTime: string,
  endTime: string,
  pricePerHour: number
): number => {
  const [startHours, startMinutes] = startTime.split(":").map(Number);
  const [endHours, endMinutes] = endTime.split(":").map(Number);

  const start = new Date(1970, 0, 1, startHours, startMinutes).getTime();
  const end = new Date(1970, 0, 1, endHours, endMinutes).getTime();

  const duration = (end - start) / (1000 * 60 * 60);
  const payable = duration * pricePerHour;

  return payable;
};
