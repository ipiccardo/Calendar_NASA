import { MonthData } from "./types";

export const getCurrentMonthData = (formattedSelectedMont: string):MonthData  => {
  const today = new Date();
  const currentMonthIndex = today.getMonth();
  const daysInCurrentMonth = new Date(
    today.getFullYear(),
    currentMonthIndex + 1 === parseInt(formattedSelectedMont)
      ? currentMonthIndex + 1
      : parseInt(formattedSelectedMont),
    0
  ).getDate();

  return {
    currentDay: String(today.getDate()).padStart(2, "0"),
    currentMonth: String(today.getMonth() + 1).padStart(2, "0"),
    currentYear: today.getFullYear(),
    currentMonthName: today.toLocaleString("en-US", { month: "long" }),
    daysInCurrentMonth: daysInCurrentMonth,
  };
};


