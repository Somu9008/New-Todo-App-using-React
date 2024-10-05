import React from "react";
import "./TodoList.css";

export default function TodoList({
  todoName,
  id,
  isComplete,
  isCompleted,
  handleDelete,
}) {
  return (
    <>
      <div className="todolist">
        <div>
          <input
            type="checkbox"
            value={isComplete}
            checked={isComplete}
            onClick={() => {
              isCompleted(id);
            }}
          />
          <span
            onClick={() => {
              isCompleted(id);
            }}
            className={`${isComplete ? "lineScratch" : ""}`}
          >
            {todoName}{" "}
          </span>
        </div>

        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          X
        </button>
      </div>
    </>
  );
}
