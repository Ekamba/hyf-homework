import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TasksList from "./TasksList";

export default function List(props) {
  const data = props.tasks.map(task => {
    return { ...task, isCompleted: false };
  });

  const [state, setState] = useState(data);

  const Id = state.length ? Math.max(...state.map(task => task.id)) + 1 : 1;
  const handleAdd = AddTask => {
    const newState = [...state].concat(AddTask);
    setState(newState);
  };

  const handleCheck = id => {
    const newState = state.map(task => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setState(newState);
  };

  const deleteTask = id => {
    setState(state.filter(task => task.id !== id));
  };

  const updateTask = (id, value) => {
    const newState = state.map(task => {
      if (task.id === id) {
        return { ...task, description: value };
      }
      return task;
    });
    setState(newState);
  };

  const tasks = state.map(task => (
    <TasksList
      key={task.id}
      task={task}
      handleCheck={handleCheck}
      handleDelete={deleteTask}
      handleUpdate={updateTask}
    />
  ));

  return (
    <>
      {TodoForm(handleAdd, Id)}
      {state.length === 0 && <span>No Items</span>}
      <ul>{tasks}</ul>
    </>
  );
}
