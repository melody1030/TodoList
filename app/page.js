'use client';
import { useState, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    name: "Calculus HW2",
    done: false,
  },
  {
    id: 2,
    name: "Side Project Figma",
    done: false,
  },
  {
    id: 3,
    name: "Course Slide",
    done: false,
  },
  {
    id: 4,
    name: "Write Blog Post",
    done: true,
  },
  {
    id: 5,
    name: "OR HW",
    done: true,
  },
];

export default function Home() {
  const [todos, setTodos] = useState(initialTodos);
  const inputRef = useRef(null);

  function Todo({ todo }) {
    return (
      <div className={`todo ${todo.done ? 'task_finished' : ''}`}>
        <button className="checkbox" onClick={() => {
          const newTodos = todos.map((t) => {
            if (t.id === todo.id) {
              return {
                ...t, /* 展開 t */
                done: !t.done, /* 複寫 done */
              }
            }
            return t;
          });
          setTodos(newTodos)
        }}></button>
        <div className="name">{todo.name}</div>
      </div>
    )
  }

  return (
    <div id="main_box">
      <h1 className="title">TODO</h1>
      <div id="input_box">
        <button id="add_todo" onClick={() => {
          // console.log(inputRef.current.value)
          setTodos([{
            id: todos.length + 1,
            name: inputRef.current.value,
            done: false
          }, ...todos])
          inputRef.current.value = '';
        }}>+</button>
        <input
          ref={inputRef}
          type="text"
          className="input"
          placeholder="Create a new todo..."
        />
      </div>
      <div id="list_box">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}
