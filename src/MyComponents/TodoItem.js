import React from "react";

const TodoItem = ({ todo,onDone }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sn btn-danger" onClick={()=>{onDone(todo)}}>Done</button>
    </div>
  );
};

export default TodoItem;
