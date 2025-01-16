import React from "react";
import { Task } from "../redux/features/tasks/taskTypes";

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded mb-2">
      <div>
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p className="text-gray-500">{task.description}</p>
        <span className="text-sm text-blue-500">{task.category}</span>
      </div>
      <div className="mt-2">
        <label>Completion:</label>
        <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${task.isCompleted ? 100 : 0}%` }}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className=" px-2 py-1 text-sm rounded text-blue-500 hover:underline shadow-md"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className=" px-2 py-1 text-sm rounded text-red-500 hover:underline shadow-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
