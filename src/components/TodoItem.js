import React from "react";

class TodoItem extends React.Component {
  render() {
    const completeStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.5,
      textDecoration: "line-through",
    }

    return <li className="todo-item">
        <input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>DELETE</button>
        <span style={this.props.todo.completed ? completeStyle : null}>{this.props.todo.title}</span>
    </li>
  }
}

export default TodoItem