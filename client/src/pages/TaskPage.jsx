import { useEffect } from "react";
import TaskCard from "../components/TaskCard.jsx";
import { useTasks } from "../context/TaskContext.jsx";

function TaskPage() {
  const { tasks, loadTask } = useTasks();

  useEffect(() => {
    loadTask();
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return <h1>No tasks yet</h1>;
    } else {
      return tasks.map((task) => <TaskCard task={task} key={task.id} />);
    }
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TaskPage;
