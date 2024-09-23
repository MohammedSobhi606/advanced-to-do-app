import Header from "./Components/Header";
import TaskCol from "./Components/TaskCol";
import todo from "./assets/icons8-goal-48.png";
import Done from "./assets/icons8-done-48.png";
import Doing from "./assets/icons8-star-48.png";
import { useEffect, useState } from "react";

const App = () => {
  const oldtasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(JSON.parse(oldtasks) || []);
  const deletetask = (index) => {
    const filtertaskedeleted = tasks.filter((item, i) => index !== i);
    setTasks(filtertaskedeleted);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // dragable feature
  const [activeCart, setActiveCart] = useState(null);
  return (
    <main className="bg-dark_bg h-screen pt-10  text-dark_bg flex flex-col  justify-start  items-center">
      <Header setTasks={setTasks} />
      <hr className="w-[95%] text-slate-300 animate-pulse mt-6" />
      <main>
        <section className="mt-12 mb-12 text-slate-50 grid  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 lg:divide-x  sm:divide-x max-sm:divide-y divide-slate-200 ">
          <TaskCol
            img={todo}
            title="To do"
            tasks={tasks}
            deletetask={deletetask}
            status={"todo"}
            setActiveCart={setActiveCart}
          />
          <TaskCol
            img={Doing}
            title="Doing"
            tasks={tasks}
            deletetask={deletetask}
            status={"Doing"}
            setActiveCart={setActiveCart}
          />
          <TaskCol
            img={Done}
            title="Done"
            tasks={tasks}
            deletetask={deletetask}
            status={"Done"}
            setActiveCart={setActiveCart}
          />
        </section>
      </main>
    </main>
  );
};

export default App;
