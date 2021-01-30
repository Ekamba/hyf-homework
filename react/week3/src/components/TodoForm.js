import React, { useState } from "react";
import DatePicker from "react-date-picker";

export default function TodoForm(handleAdd, id) {
  // Todo form for adding todo

  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [value, setValue] = useState(new Date());

  const handleAddData = () => {
    handleAdd({
      id: id,
      description: description,
      deadline: deadline,
      done: false
    });
  };

  return (
    <form className="form-group">
      <label>
        <span>
          <b>Todo description</b>:
        </span>
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={e => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        <span>
          <b>deadline</b>:
        </span>

        <DatePicker
          value={value}
          onChange={e => {
            setValue(e);
            setDeadline(e.toLocaleDateString());
          }}
        />
      </label>
      <br />
      <button
        onClick={e => {
          e.preventDefault();
          if (description && deadline) handleAddData();
        }}
        type="button"
        className="btn btn-outline-secondary"
      >
        <b>Add todo</b>
      </button>
    </form>
  );
}
