import React, { useState } from "react";
import "./app.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  const addTodo = () => {
    if (newTodo !== "") {
      const todo = {
        name: newTodo,
        status: false,
      };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
    console.log(todos);
  };
  const deleteTodo = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  const handleToggle = (index) => {
    todos[index].status = !todos[index].status;
    setTodos([...todos]);
  };
  const toggleAll = (checked) => {
    // todos.status = !todos.status;
    const allToggle = todos.map((data) => ({ ...data, status: checked }));
    setTodos([...allToggle]);
  };
  const deleteAll = () => {
    setTodos([]);
  };
  const checkCount = todos.filter((todo) => todo.status).length;
  return (
    <div className="body">
      <div className="app-wrapper">
        <h1>TODO</h1>;
        <div className="count-wrapper">
          <h2>Total Todo: {todos.length} </h2>
          <h2>Checked:{checkCount}</h2>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            value={newTodo}
            placeholder="Type your todo"
            onChange={handleChange}
          />
          <button onClick={addTodo}>ADD</button>
        </div>
        <div className="all-items">
          {todos.length === 0 && <h2>No Todos Found</h2>}
          {todos.length > 1 && (
            <div className="options-all">
              <div className="checkbox-name">
                <input
                  type="checkbox"
                  name="selectAll"
                  checked={checkCount === todos.length}
                  onClick={() => {
                    toggleAll(checkCount !== todos.length);
                  }}
                />
              </div>
              <div className="check-label">
                <label>Select All</label>
              </div>
              <div className="deleteall-button">
                <button onClick={deleteAll}>DELETE ALL</button>
              </div>
            </div>
          )}
        </div>
        <div className="todos-list">
          <ul>
            {todos.map((data, index) => (
              <li key={index}>
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="list"
                    onClick={() => {
                      handleToggle(index);
                    }}
                    checked={data.status}
                  />
                </div>
                <div className="items-name">{data.name}</div>
                <div className="delete-button">
                  <button onClick={deleteTodo}>DELETE</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
