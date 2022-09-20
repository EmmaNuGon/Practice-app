import React from "react";
import { useState } from "react";

export function Todo({ todo, onUpdate, onDelete}) {
  const [isEdit, setIsEdit] = useState(false);

   function FormEdit() {

const [newValue, setNewValue] = useState(todo.title);

    function handleSubmit(e){
        e.preventDefault();

     
       }

       function handleChange(e){
        setNewValue(e.target.value)
        

    }
    function handleclickUp(){
       onUpdate(todo.id, newValue)
       setIsEdit(false)
    }
  
    

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input type="text" className="todoInput"  onChange={handleChange} value={newValue}/>
        <button onClick={handleclickUp} className="button" >Update</button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <p className="todoTitle">{todo.title}</p>
        <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
        <button className="buttonDelete" onClick={() => (onDelete(todo.id))}>Delete</button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
