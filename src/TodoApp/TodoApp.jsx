import React from "react";
import { useState } from "react";
import { Todo } from "../Todo/Todo";
import "../TodoApp.css"

export function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setTitle(e.target.value);
   
  }
  

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("")
 

    //const temp =[...todos];
    //temp.unshift(newTodo);
    //setTodos(temp);
  }

  function handleUpdate(id,value){
    const temp = [...todos];
    const todo = temp.find(todo => todo.id === id);
    todo.title = value;
    setTodos(temp);
  }

  function onDelete(id){
  const temp = todos.filter(todo => todo.id !== id)
  setTodos(temp)
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="CreateToDo"
          className="buttonCreate"
        />
      </form>
      <div className="todosContainer">
        {todos.map((todo) => (
         <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
}
