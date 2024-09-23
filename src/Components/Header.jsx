import React, { useState } from "react";
import Tags from "./Tags";

function Header({ setTasks }) {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const handelTaskData = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!taskData.task) {
      return;
    } else {
      setTasks((prev) => {
        return [...prev, taskData];
      });
    }

    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  const selectTags = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filtertag = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filtertag };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };
  const selectedTags = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <form
        className="w-full  flex items-center justify-center flex-col"
        onSubmit={handelSubmit}
      >
        <input
          className="placeholder:italic font-montserrat placeholder:text-slate-400 block bg-white w-[95%] lg:text-xl lg:w-3/6 mx-8 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm"
          placeholder="Enter Your Task..."
          type="text"
          name="task"
          onChange={handelTaskData}
          value={taskData.task}
        />
        <div
          className="flex items-center justify-between flex-wrap gap-4  mt-6 w-[95%]
lg:w-3/6   "
        >
          {/* buttons */}
          <div className="flex items-start justify-center  flex-wrap gap-2 lg:gap-1 ">
            <Tags
              tagName="HTML"
              selectTags={selectTags}
              selected={selectedTags("HTML")}
            />
            <Tags
              tagName="CSS"
              selectTags={selectTags}
              selected={selectedTags("CSS")}
            />
            <Tags
              tagName="JavaScript"
              selectTags={selectTags}
              selected={selectedTags("JavaScript")}
            />
          </div>
          {/* select && add */}
          <div className="flex items-center  justify-center gap-4  ">
            <select
              className="sm:px-2 sm:py-2  px-1 py-1
  text-sm sm:text-lg font-bold font-montserrat rounded-md  pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              onChange={handelTaskData}
              name="status"
              value={taskData.status}
            >
              <option value="todo">to do</option>
              <option value="Doing">doing</option>
              <option value="Done">done</option>
            </select>
            <button className="bg-indigo-500 active:scale-90 font-montserrat text-sm sm:text-lg font-bold p-4 py-2 rounded-lg text-white hover:bg-indigo-600 duration-100 ease-linear">
              + add task
            </button>
          </div>
          {/* /////////////// */}
        </div>
      </form>
    </div>
  );
}

export default Header;
