import React, { useEffect, useState } from "react";
import {CgAdd} from 'react-icons/cg'


const AddTodo = ({fetchData}) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/list/save", {
      method: "POST",
      body: JSON.stringify({
        title: title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        setTitle('')
        fetchData()
        console.log(result);
      })
      .catch((e) => {
        console.log(e.message);
      })
  };

  

 
  return (
      <form onSubmit={handleSubmit}>
        <div className="todoInput">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button type="submit">
            <CgAdd className="add"/>
          </button>
        </div>
      </form>
    
  );
};

export default AddTodo;
