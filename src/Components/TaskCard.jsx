import React from "react";
import Tags from "./Tags";
import deleteicon from "../assets/icons8-delete-48.png";
function TaskCard({ title, tags, deletetask, index, setActiveCart }) {
  return (
    <div
      draggable
      className="grid items-start active:bg-opacity-50 cursor-grab justify-center gap-1 rounded-md px-4  py-2 outline-none border-sky-500 ring-sky-500 ring-1  "
      onDragStart={() => setActiveCart(index)}
      onDragEnd={() => setActiveCart(null)}
    >
      <p className="text-xl font-semibold font-montserrat leading-normal ">
        {title}
      </p>
      <hr className="w-full mb-1 opacity-45" />
      <div className="flex  gap-4 justify-between items-center">
        {/* tags */}
        <div className=" text-dark_bg flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <Tags tagName={tag} key={i} selected />
          ))}
        </div>
        {/* delete icon */}
        <div
          onClick={() => deletetask(index)}
          className="cursor-pointer shrink-0 w-10  h-10 active:scale-75  hover:scale-125"
        >
          <img src={deleteicon} />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
