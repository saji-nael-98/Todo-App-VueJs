import { API_URL } from "../constant/api";

const TASKS_API = `${API_URL}/tasks`;
export const getTasks = async () => {
  const res = await fetch(TASKS_API);
  return res;
};
export const deleteTask = async (id) => {
  const res = await fetch(`${TASKS_API}/${id}`, {
    method: "DELETE",
  });
  return res;
};
export const saveTask = async (task) => {
  const res = await fetch(TASKS_API, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
