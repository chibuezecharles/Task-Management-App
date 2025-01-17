import axios from "axios";
import { Task } from "../redux/features/tasks/taskTypes";

// const API_URL = "http://localhost:5000/tasks";
const API_URL = "https://task-management-app-m7du.vercel.app/api/json-server/tasks";


export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get<Task[]>(API_URL);
  return response.data;
};

export const createTask = async (task: Task): Promise<Task> => {
  const response = await axios.post<Task>(API_URL, task);
  return response.data;
};

export const updateTask = async (id: string, task: Task): Promise<Task> => {
  const response = await axios.put<Task>(`${API_URL}/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

