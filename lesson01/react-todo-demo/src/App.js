import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Free the Hound", rowAssign: "Ion" },
    { rowNumber: 2, rowDescription: "Catch a Seal", rowAssign: "Gica" },
    { rowNumber: 3, rowDescription: "Beat a Kangaroo", rowAssign: "Vasile" },
  ]);

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssign: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
    console.log(todos);
  };

  const deleteTodo = (deleteRowNumber) => {
    let filtered = todos.filter((value) => {
      return value.rowNumber !== deleteRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your todo`s</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />

          <button
            className="btn btn-primary"
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          >
            {showAddTodoForm ? "Close New Todo" : "New Todo"}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
