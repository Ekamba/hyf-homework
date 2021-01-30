import React from "react";

import TimeSpend from "./TimeSpend";

function Form(props) {
  return (
    <div>
      <div class="bg-info clearfix">
        <button type="button" class="btn btn-secondary float-left">
          <h3 align="left">
            {" "}
            <b>Todolist</b>
          </h3>
        </button>
        <button type="button" class="btn btn-secondary float-right">
          <TimeSpend />
        </button>
      </div>

      <form
        class="form-group"
        onSubmit={props.onSubmit}
        style={{ paddingLeft: 40, marginTop: 16, marginRight: 20 }}
      >
        <input
          type="text"
          value={props.value}
          onChange={props.onChange}
          placeholder="Example of task: Learning React Hooks "
          className="form-control mb-2"
        />

        <button onClick={props.addTodo} class="btn btn-outline-success">
          Add ToDo
        </button>
      </form>
    </div>
  );
}

export default Form;
