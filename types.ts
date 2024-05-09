export interface Pictures {
  title: string;
  date: string;
  explanation: string;
  media_type: string;
  thumbnail_url: string;
  url: string;
}

export interface CalendarProps {
  selectedMonth: string | any;
}



export interface Month {
  number: number;
  name: string;
}

export interface PaginationProps {
  monthOnGoing: string;
  formattedSelectedMonth: string;
}


export interface MonthData {
  currentDay: string;
  currentMonth: string;
  currentYear: number;
  currentMonthName: string;
  daysInCurrentMonth: number;
}
