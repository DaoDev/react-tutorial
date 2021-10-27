import React from "react";
import PropTypes from "prop-types";

TodoItem.propTypes = {
  item: PropTypes.string,
};

TodoItem.defaultProps = {
  item: "",
};

function TodoItem(props) {
  const { item } = props;
  return <p>{item}</p>;
}

export default TodoItem;
