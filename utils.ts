import { MonthData, Pictures } from "./types";

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


export const getDayDataFormatted = (formattedSelectedMonth: string) => {

  const { currentDay, currentMonth, currentYear, daysInCurrentMonth } = getCurrentMonthData(formattedSelectedMonth)

  const startDay = `${currentYear}-${currentMonth !== formattedSelectedMonth && formattedSelectedMonth !== '0' ? formattedSelectedMonth : currentMonth}-01`
  const endDay = `${currentYear}-${currentMonth !== formattedSelectedMonth && formattedSelectedMonth !== '0'? formattedSelectedMonth : currentMonth}-${currentMonth !== formattedSelectedMonth && formattedSelectedMonth !== '0' ? daysInCurrentMonth.toString() : currentDay}`

  return {
    startDay,
    endDay
  }

}

  export const fillWidthoUtPicture = (allPictures:Pictures[], formattedSelectedMonth:string) => {
    const totalDaysOfMonth: Pictures[] = [];

    const { currentMonth, currentYear, daysInCurrentMonth, currentDay } = getCurrentMonthData(formattedSelectedMonth)

  
    for (let i = 1; i <= daysInCurrentMonth; i++) {
  
        const currentDate = `${currentYear}-${currentMonth !== formattedSelectedMonth && formattedSelectedMonth !== '0' ? formattedSelectedMonth : currentMonth}-${i <= 9 ? '0' + i : i}`;
  
        const picture = allPictures?.find((p: Pictures) => p.date.toString() === currentDate.toString());
  
        picture ? totalDaysOfMonth?.push(picture) :
  
            totalDaysOfMonth.push({
                title: '',
                date: currentDate,
                explanation: "",
                media_type: '',
                thumbnail_url: '',
                url: '/default.jpg'
            });
    }
  
    return {
      totalDaysOfMonth,
      currentMonth,
      currentYear,
      currentDay,
    }
  }

  


