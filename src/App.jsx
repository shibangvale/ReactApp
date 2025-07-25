// App.js 

import "./App.css";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const App = () => {
  const [text, setText] = useState("");


    const dispatch = useDispatch();
     const todos = useSelector((state) => {
      console.log(state);
      return state.todos;
     });

    

    const handleAddTodo = () => {
      let todoItem =  {
                id: new Date().getTime(),
                text:text
            };
      dispatch({ type: 'ADD_TODO', payload:todoItem });
      setText("");
    };

    const handleRemoveTodo = (id) => {
        dispatch({ type: 'REMOVE_TODO', payload:id });
    };

    const handleToggleTodo = (id) => {
        toggleTodo(id);
    };

    return (
        <div id="app">
            <div>
                <h1>To-Do List</h1>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => 
                        setText(e.target.value)}
                    placeholder="Enter a task..."
                />
                <button onClick={handleAddTodo}>
                    Add
                </button>
                <ul>
                    {todos.map((todo) => (
                        <li
                            className="todo"
                            key={todo.id}
                            onClick={() => handleToggleTodo(todo.id)}
                        >
                            {todo.text}
                            <button onClick=
                                {() => handleRemoveTodo(todo.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App