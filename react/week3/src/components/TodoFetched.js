import React from "react";
import List from "./List";

export default function TodoFetched(props) {
  return (
    <section className="List">
      <List tasks={props.tasks} />
    </section>
  );
}
