const url = "http://localhost:4000/";

const getTasksRequest = async () =>
  await fetch(url + "tasks").then((res) => res.json());

const createTaskRequest = async (tasks) =>
  await fetch(url + "tasks", {
    method: "POST",
    body: JSON.stringify(tasks),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

const deleteTaskRequest = async (id) =>
  await fetch(url + `tasks/${id}`, {
    method: "DELETE",
  });

const getTaskRequest = async (id) =>
  await fetch(url + `tasks/${id}`).then((res) => res.json());

const updateTaskRequest = async (id, newFields) =>
  await fetch(url + `tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(newFields),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

const toggleTaskDoneRequest = async (id, done) =>
  await fetch(url + `tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify({ done }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

export {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
};
