import React, { useState } from "react";
import iconTodo from "./iconTodo.svg";
import "./todo.css";
import { RiFileAddLine } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";

const Todo = () => {
  const [input, setInput] = useState("");
  const [inputArray, setInputArray] = useState([]);

  const onInputChange=(event)=>{
    setInput(event.target.value);
  }

  const onClickButton=()=>{
    if(input)
    {
        setInputArray([...inputArray,input]);
        
        setInput("");
    }
  }

  const deleteItem=(index)=>{
    const updatedData=inputArray.filter((input,ind)=>{
        if(ind!=index)
        {
            return input;
        }
    })
    setInputArray(updatedData);
  }
//   localStorage.setItem("AllTodos",JSON.stringify(inputArray));
//   console.log(JSON.parse(localStorage.getItem("AllTodos")))
  return (
    <div className="main-todo">
      <figure>
        <img src={iconTodo} alt="icon"></img>
        <figcaption>New Plans Ahead 👀</figcaption>
      </figure>
      <div className="addItem">
        <input
          placeholder="Plan your Day...🕐"
          value={input}
          onChange={onInputChange}
        ></input>
        <RiFileAddLine onClick={onClickButton}/>
      </div>
      {inputArray.map((item,index)=>(
        <div className="show-todo" key={index}>
        <p>{item}</p>
        <FaTrashAlt onClick={()=>deleteItem(index)}/>
      </div>
      ))}
      
    </div>
  );
};

export default Todo;
