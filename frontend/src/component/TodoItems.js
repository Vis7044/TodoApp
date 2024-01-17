import React, { useState, useEffect } from "react";
import DateT from "./DateT";
import AddTodo from "./AddTodo";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { CgAdd } from "react-icons/cg";
import { Link } from "react-router-dom";

const TodoItems = () => {
  const [data, setData] = useState([]);
  //fetchall
  const fetchData = async () => {
    const response = await fetch("/api/list/get");
    const result = await response.json();
    if (response.ok) {
      setData(result);
    }
  };

  //Delete

  const Delete = async (id) => {
    const response = await fetch(`/api/list/delete/${id}`,{
      method:'DELETE'
    });
    const result = await response.json();
    if (response.ok) {
      setData(data)
    }
    if(!response.ok){
      console.log(result.error)
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="todo">
      <DateT />
      <AddTodo fetchData={fetchData}/>
      <div>
        {data.length===0 && <p>No Todos</p>}
        {data &&
          data.map((e) => (
            <div className="ListItems" key={e._id}>
              <span>{e.title}</span>
              <div className="DelEd">
                <Link to={`/${e._id}`}><FaRegEdit className="bt"/></Link>
                <MdDeleteForever className="bt" onClick={() => Delete(e._id)}/>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoItems;
