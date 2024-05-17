import React from "react";

function TodoList(props) {
  return (
    <h3 className="list-Item">
      {props.item}
      <span className="icons">
        <i
          class="fa-solid fa-trash-can icon-delete"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        ></i>
      </span>
    </h3>
  );
}

export default TodoList;
