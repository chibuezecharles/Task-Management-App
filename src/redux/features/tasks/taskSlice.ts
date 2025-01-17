import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "./taskTypes";
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../../services/taskService";
import {showToast} from "../../../components/Notification";

// Define the state type
interface TaskState {
  tasks: Task[];
  editingTask:Task | null;
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  editingTask: null,
  loading: false,
  error: null,
};

// Async thunk to fetch tasks
export const getTasks = createAsyncThunk<Task[], void>(
  "tasks/getTasks",
  async () => {
    const response = await fetchTasks();
    return response;
  }
);

// Async thunk to add a task
export const addTask = createAsyncThunk<Task, Task>(
  "tasks/addTask",
  async (task) => {
    const response = await createTask(task);
    return response;
  }
);

// Async thunk to edit a task
export const editTask = createAsyncThunk<Task,  { id: string; task: Task }>(
  "tasks/editTask",
  async ({id, task}) => {
    const response = await updateTask(id, task);
    return response;
  }
);

// Async thunk to delete a task
export const removeTask = createAsyncThunk<string, string>(
  "tasks/removeTask",
  async (id) => {
    await deleteTask(id);
    return id;
  }
);

// Create the task slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setEditDetails:(state, {payload}) =>{
      state.editingTask = payload;
    }
  },
  extraReducers: (builder) => {
    // Fetch tasks
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tasks.";
        // display the error message
        showToast({
          title: "Error",
          description: state.error,
          status: "error",
        });
      });

    // Add a new task
    builder
      .addCase(addTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.loading = false;
        state.error = null;
        // display the success message
        showToast({
          title: "Success",
          description: "Task added successfully",
          status: "success",
        });
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add task.";
        showToast({
          title: "Error",
          description: state.error,
          status: "error",
        });
      });

    // Edit a task
    builder
      .addCase(editTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((t) => t.id === action.payload.id);
        if (index >= 0) {
          state.tasks[index] = action.payload;
        }
        state.loading = false;
        state.error = null;
        showToast({
          title: "Success",
          description: "Task edited successfully",
          status: "success",
        });
      })
      .addCase(editTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to edit task.";
        showToast({
          title: "Error",
          description: state.error,
          status: "error",
        });
      });

    // Delete a task
    builder
      .addCase(removeTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((t) => t.id !== action.payload);
        state.loading = false;
        state.error = null;
        showToast({
          title: "Success",
          description: "Task deleted successfully",
          status: "success",
        });
      })
      .addCase(removeTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete task.";
        showToast({
          title: "Error",
          description: state.error,
          status: "error",
        });
      });
  },
});

export default taskSlice.reducer;
export const { setEditDetails } = taskSlice.actions;
