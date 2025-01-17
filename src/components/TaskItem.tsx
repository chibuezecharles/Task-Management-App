import React from "react";
import { Task } from "../redux/features/tasks/taskTypes";

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit }) => {
  const today = new Date();
  const dueDate = new Date(task.dueDate);

  // Check if the due date is today
  const isDueToday =
    dueDate.getFullYear() === today.getFullYear() &&
    dueDate.getMonth() === today.getMonth() &&
    dueDate.getDate() === today.getDate();

  // Check if the due date has passed
  const isPastDue = dueDate < today && !isDueToday;

  // Determine completion percentage
  const completionWidth = task.isCompleted || isPastDue ? 100 : 0;

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white shadow rounded mb-2 gap-4 md:gap-6">
      <div>
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p className="text-gray-500">{task.description}</p>
        <span className="text-sm text-blue-500">{task.category}</span>
      </div>
      <div className="my-2">
        <label>Completion:</label>
        <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${completionWidth}%` }}
          />
        </div>
        {isDueToday && !task.isCompleted && (
          <p className="text-xs text-yellow-500 mt-1">Due Today</p>
        )}
        {isPastDue && !task.isCompleted && (
          <p className="text-xs text-red-500 mt-1">Overdue</p>
        )}
        {task.isCompleted && (
          <p className="text-xs text-green-500 mt-1">Completed</p>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="px-2 py-1 text-sm rounded text-blue-500 hover:underline shadow-md"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-2 py-1 text-sm rounded text-red-500 hover:underline shadow-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
