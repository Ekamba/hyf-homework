import React from "react";

class Task extends React.Component {
  render() {
    return (
      <li className="task">
        <div>
          <b>title:</b> {this.props.title}
        </div>
        <div>
          <b>when:</b> {this.props.when}
        </div>
      </li>
    );
  }
}

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: "Get out of bed",
          when: "Wed Sep 13 2017",
          id: 1
        },
        {
          title: "Brush teeth",
          when: "Thu Sep 14 2017",
          id: 2
        },
        {
          title: "Eat breakfast",
          when: "Fri Sep 15 2017",
          id: 3
        }
      ]
    };
  }

  render() {
    const listItems = this.state.tasks.map(task => (
      <Task key={task.id} title={task.title} when={task.when} />
    ));
    return <ul className="task-list">{listItems}</ul>;
  }
}

export default TaskList;
