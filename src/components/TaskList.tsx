import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../redux/features/tasks/taskTypes";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="p-4 bg-gray-100 text-black rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center py-3">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
