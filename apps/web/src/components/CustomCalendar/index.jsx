import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarContainer, MonthYearDisplay } from "./styled";

function CustomCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  }


  return (
    <CalendarContainer>
      
      <MonthYearDisplay>
        <span className="month">{date.toLocaleString("pt-BR", { month: "long" })}</span>
        <span className="year">{date.getFullYear()}</span>
      </MonthYearDisplay>

      <Calendar
        className="custom-calendar"
        nextLabel={null}
        prevLabel={null}
        showNeighboringMonth={false}
        navigationLabel={null}
        onChange={handleDateChange(new Date())}
        locale="pt-BR"
        formatShortWeekday={(_, date) => {
          const days = ["D", "S", "T", "Q", "Q", "S", "S"];
          return days[date.getDay()];
        }}
      />
    </CalendarContainer>
  );
}

export default CustomCalendar;
