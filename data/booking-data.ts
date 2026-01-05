import { TimeSlot } from "@/types/booking";
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];
const getStartDate = (): Date => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
  const startDate = new Date(today);
  startDate.setDate(today.getDate() + daysUntilMonday);
  return startDate;
};

const startDate = getStartDate();

export const initialBookingData: TimeSlot[] = [];

daysOfWeek.forEach((day, dayIndex) => {
  const currentDate = new Date(startDate);
  currentDate.setDate(startDate.getDate() + dayIndex);

  const dateString = currentDate.toISOString().split("T")[0];
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  timeSlots.forEach((time, timeIndex) => {
    const slotNumber = dayIndex * timeSlots.length + timeIndex;
    const isAvailable = ![2, 5, 11, 18, 23, 29, 34, 41].includes(slotNumber);

    initialBookingData.push({
      id: `${dateString}-${time}`,
      day,
      date: formattedDate,
      time,
      available: isAvailable,
      bookedBy: !isAvailable ? "System" : undefined,
    });
  });
});

export { timeSlots, daysOfWeek };
