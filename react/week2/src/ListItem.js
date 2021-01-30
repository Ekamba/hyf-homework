import React from "react";

function ListItem(props) {
  const { id, description, done } = props.todo;

  return (
    <li
      style={{ textDecoration: done ? "line-through" : "" }}
      class="list-group-item"
    >
      <div>
        <b class="list-group-item">id: {id}</b>
      </div>
      <div>
        <b class="list-group-item">description: {description}</b>
      </div>
      {!done ? (
        <button onClick={props.completed} class="btn btn-outline-warning">
          Complete
        </button>
      ) : (
        ""
      )}

      <button onClick={props.remove} class="btn btn-outline-danger">
        Delete
      </button>
    </li>
  );
}
export default ListItem;
