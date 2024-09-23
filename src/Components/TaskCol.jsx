import React from "react";
import TaskCard from "./TaskCard";

function TaskCol({ img, title, tasks, status, deletetask, setActiveCart }) {
  return (
    <section className=" flex gap-4  justify-start w-full items-start flex-col px-5">
      <h1 className="flex gap-2  mt-2 items-center justify-center text-lg font-bold font-montserrat leading-normal">
        <img src={img} alt={title} />
        {title}
      </h1>

      {tasks.map(
        (task, i) =>
          task.status === status && (
            <div key={i} className=" flex flex-col gap-4">
              <TaskCard
                title={task.task}
                deletetask={deletetask}
                tags={task.tags}
                index={i}
                setActiveCart={setActiveCart}
              />
            </div>
          )
      )}
    </section>
  );
}

export default TaskCol;
