import React from "react";

function Tags({ tagName, selectTags, selected }) {
  return (
    <button
      type="button"
      className={`px-4 py-0.5 ${
        selected ? "bg-indigo-600 text-white" : "bg-slate-100"
      }  font-montserrat active:scale-90 ease-linear duration-100 rounded-full`}
      onClick={() => selectTags(tagName)}
      disabled={!selectTags}
    >
      {tagName}
    </button>
  );
}

export default Tags;
