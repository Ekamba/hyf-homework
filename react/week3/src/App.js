import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import TimeSpend from "./components/TimeSpend";
import TodoFetched from "./components/TodoFetched";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
      )
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => {});
console.log(err);
  }, []);

  return (
    <div className="App">
      <h1>Todolist</h1>

      <TimeSpend />
      {todos.length === 0 ? <p>Loading</p> : <TodoFetched tasks={todos} />}
    </div>
  );
};

export default App;
