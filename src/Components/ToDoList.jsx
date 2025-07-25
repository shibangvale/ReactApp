import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import '../Components/ToDoList.css'


function  ToDoList()
{
    const [text, setText] = useState("");
    const dispatch = useDispatch();
     const todos = useSelector((state) => {
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


<div className="container">
  <br />
  <div className="row">
    <div className="col-md-12">
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="form-group">
            <label for="exampleInputLabel1"><h3>Todo List</h3></label>
            <div className="inline-form">
              <div className="input-container">
                <input
                    className="form-control" id="exampleInputText1"
                    type="text"
                    value={text}
                    onChange={(e) => 
                        setText(e.target.value)}
                    placeholder="Enter a task..."
                />
              </div>
              <div className="button-container">
                <button type="button" onClick={handleAddTodo} className="btn btn-primary mx-3">
                    Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            <div>
                <ul className="list-group my-3">
                    {todos.map((todo) => (
                        <li
                            className="list-group-item"
                            key={todo.id}
                        >
                            {todo.text}
                            <button type="button"
                            className="btn btn-danger mx-3 float-end"
                            onClick= {() => handleRemoveTodo(todo.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;