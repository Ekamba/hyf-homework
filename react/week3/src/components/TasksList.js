import React, { useState } from "react";

export default function ListItem(props) {
  const { task, handleCheck, handleDelete, handleUpdate } = props;

  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(task.description);

  const editItem = id => {
    if (edit) handleUpdate(id, description);
    setEdit(!edit);
  };

  return (
    <li key={task.id}>
      <span className={task.isCompleted ? "line-through" : ""}>
        {edit ? (
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        ) : (
          <>
            {description} | {task.deadline}
          </>
        )}
      </span>
      <input
        type="checkbox"
        name={task.description}
        checked={task.isCompleted && "checked"}
        onChange={() => handleCheck(task.id)}
      />
      <button
        onClick={() => handleDelete(task.id)}
        className="btn btn-outline-dark"
      >
        {" "}
        <b>Delete</b>
      </button>
      <button
        onClick={() => editItem(task.id)}
        className="btn btn-outline-dark"
      >
        {!edit ? <b>Edit</b> : <b>Update</b>}
      </button>
    </li>
  );
}
