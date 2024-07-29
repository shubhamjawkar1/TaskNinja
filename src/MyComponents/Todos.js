import React from 'react';
import TodoItem from "./TodoItem";

export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No Todo to display" :
        props.todos.map((todo) => {
          return (
            <React.Fragment key={todo.sno}>
              <TodoItem todo={todo} onDone={props.onDone} />
              <hr />
            </React.Fragment>
          );
        })
      }
    </div>
  );
}
