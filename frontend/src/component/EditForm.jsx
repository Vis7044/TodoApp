import React from "react";
import { CgAdd } from "react-icons/cg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const EditForm = () => {
  const [singleData, setSingleData] = useState();
  const [edit, setEdit] = useState()
  const [navigate, setNavigate] = useState(false)

  const { id } = useParams();
  console.log(id);

  // const navigate = Navigate()
  //fetchone
  const GetOneData = async () => {
    const response = await fetch(`/api/list/getSingle/${id}`);
    const result = await response.json();
    if (response.ok) {
      setSingleData(result.title);
      console.log(result);
    }
    if (!response.ok) {
      console.log(result.error);
    }
  };

  //update date 
  const update = async (e) => {
    e.preventDefault()
    const response = await fetch(`/api/list/update/${id}`,{
      method:'PUT',
      body: JSON.stringify({
        title: singleData
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    if (response.ok) {
      setSingleData(result.title);
      console.log(result);
    }
    if (!response.ok) {
      console.log(result.error);
    }
    setNavigate(!navigate);
  };

  

  useEffect(() => {
    GetOneData();
  }, []);

  return (
    <form onSubmit={update}>
        <div className="todoInput">
          <input value={singleData?singleData:''} type="text" onChange={(e) => setSingleData(e.target.value)} />
          <button type="submit">
            <CgAdd className="add" />
            {navigate && <Navigate to='/' />}
          </button>
        </div>
    </form>
  );
};

export default EditForm;
