import React from "react";

const Todo = ({ todo,index,llave,deleteTodo }) => {
  //console.log(llave+'---'+index+'---'+todo);
  return (
    <>
      <div className="list">
          <h3>{llave}-{todo}</h3>
          <button className="btn-delete" onClick={
              ()=>deleteTodo(index)
          }>X</button>
      </div>
    </>
  )
}
export default Todo;