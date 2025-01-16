import React, { useState } from "react";
import { Task } from "../redux/features/tasks/taskTypes";
import { format } from "date-fns";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styles


interface CalendarViewProps {
  tasks: Task[];
}

const CalendarView: React.FC<CalendarViewProps> = ({ tasks }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const tasksByDate = tasks.reduce((acc: any, task) => {
    const date = task.dueDate ? new Date(task.dueDate) : null;
    if (date && !isNaN(date.getTime())) {
      const formattedDate = format(date, "yyyy-MM-dd");
      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }
      acc[formattedDate].push(task);
    }
    return acc;
  }, {});

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const formattedSelectedDate = format(selectedDate, "yyyy-MM-dd");
  const tasksForSelectedDate = tasksByDate[formattedSelectedDate] || [];

  const getTileClassName = ({ date }: any) => {
    const formattedDate = format(date, "yyyy-MM-dd");

    if (tasksByDate[formattedDate]) {
      if (formattedDate === formattedSelectedDate) {
        return "react-calendar__tile--active";
      }
      return "react-calendar__tile--hasTask"; 
    }

    return ""; 
  };

  return (
    <div className="p-4 bg-gray-100 text-black rounded shadow">
      <h2 className="text-xl font-bold mb-4">Calendar View</h2>

      <Calendar
        onClickDay={handleDateClick}
        value={selectedDate}
        tileClassName={getTileClassName}
        className="mb-4"
      />

      <div className="mt-4">
        <h3 className="font-bold">{formattedSelectedDate}</h3>
        <ul className="ml-4 list-disc">
          {tasksForSelectedDate.map((task: Task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarView;
