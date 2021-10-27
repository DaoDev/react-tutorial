import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";
import classnames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todoList, onTodoClick } = props;

  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  };

  return (
    <ul className="todo-list">
      {todoList.map((item, idx) => (
        <li
          className={classnames({ "todo-item": true, completed: item.status === "completed" })}
          key={item.id}
          onClick={() => handleTodoClick(item, idx)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
