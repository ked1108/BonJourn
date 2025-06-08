import { useState } from "react";
import "./Calendar.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = ({ selectedDate, onDateChange, highlightedDates = [] }) => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1));
    };

    const isToday = (day) =>
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();

    const isHighlighted = (date) =>
        highlightedDates.includes(date.toDateString());


    const isSelected = (day) => {
        return (
            selectedDate &&
            day === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear()
        );
    };

    const handleSelectDate = (day) => {
        onDateChange(new Date(year, month, day)); // Send Date object to parent
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={handlePrevMonth}>&lt;</button>
                <h3>
                    {currentDate.toLocaleString("default", { month: "long" })} {year}
                </h3>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>

            <div className="calendar-grid">
                {daysOfWeek.map((day) => (
                    <div key={day} className="calendar-day-name">
                        {day}
                    </div>
                ))}

                {Array(firstDayOfMonth)
                    .fill(null)
                    .map((_, i) => (
                        <div key={`empty-${i}`} className="calendar-day empty" />
                    ))}

                {Array(daysInMonth)
                    .fill(null)
                    .map((_, dayIndex) => {
                        const day = dayIndex + 1;
                        return (
                            <div
                                key={day}
                                className={`calendar-day
                                    ${isToday(day) ? "today" : ""}
                                    ${isHighlighted(new Date(year, month, day)) ? 'highlighted' : ''}
                                    ${isSelected(day) ? "selected" : ""}
                                `}
                                onClick={() => handleSelectDate(day)}
                            >
                                {day}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Calendar;
