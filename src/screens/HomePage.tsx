import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store";
import { Task } from "../redux/features/tasks/taskTypes";
import { getTasks, addTask, editTask, removeTask, setEditDetails } from "../redux/features/tasks/taskSlice";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import CalendarView from "../components/CalendarView";

const HomePage = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useAppDispatch();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleAddTask = (task: Task) => {
    if (editingTask) {
      dispatch(editTask({ id: editingTask.id, task }));
      setEditingTask(null);
    } else {
      dispatch(addTask({ ...task, id: Date.now().toString() }));
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    dispatch(setEditDetails(task));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(removeTask(id));
  };

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.category.toLowerCase().includes(searchQuery.toLowerCase())||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto p-4 border">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <TaskForm
        onSubmit={handleAddTask}
        initialValues={editingTask || { title: "", description: "", category: "", startDate: "", dueDate: "", isCompleted: false }}
      />

      <div className="my-4  flex justify-end items-end ">
        <input
          type="text"
          placeholder="Search tasks "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded mb-4 md:w-3/6 sm:w-full"
        />
      </div>
      
      <div className="my-4">
        <TaskList tasks={filteredTasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      </div>
      
      <CalendarView tasks={filteredTasks} />
    </div>
  );
};

export default HomePage;
