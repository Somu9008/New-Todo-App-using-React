import React, { useState } from "react";
import TodoList from "./TodoList";
import "./Todo.css";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [addTodo, setAddTodo] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [id, setId] = useState(0);

  function isCompeteted(id) {
    // if (isComplete === true) {
    //   setIsComplete(false);
    // } else {
    //   setIsComplete(true);
    // }

    setAddTodo((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          // setIsComplete(!isComplete);
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });
    });
  }

  let handleDelete = (id) => {
    setAddTodo((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      alert("please add todo");
    } else {
      setAddTodo((prevVal) => {
        return [
          ...prevVal,
          {
            id: id,
            todoName: todo,
            isCompleted: isComplete,
          },
        ];
      });
      setId(id + 1);
      setTodo("");
    }
  };

  // console.log(addTodo);
  console.log("todo rendered");
  return (
    <div className="todo">
      <h1>Todo App</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
      <>
        {addTodo.map((todo) => {
          return (
            <TodoList
              key={todo.id}
              {...todo}
              isCompleted={isCompeteted}
              isComplete={todo.isCompleted}
              handleDelete={handleDelete}
            />
          );
        })}
      </>
    </div>
  );
}
