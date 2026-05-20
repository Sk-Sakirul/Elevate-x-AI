import React, { useState } from "react";

const initialTodos = [
  { id: 1, title: "Revise React basics", completed: false },
  { id: 2, title: "Practice useState", completed: true },
  { id: 3, title: "Understand useEffect", completed: false },
  { id: 4, title: "Revise useRef", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos || []);

  function handleClick(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div>
      <p>
        Completed : {todos.filter((todo) => todo.completed).length} / {" "}
        {todos.length} {" "}
      </p>

      {todos.map((todo) => {
        return (
          <div key={todo.id} style={{ margin: "5px" }}>
            <span
              style={{
                marginRight: "5px",
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => handleClick(todo.id)}>
              {todo.completed ? "Done" : "Undo"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
