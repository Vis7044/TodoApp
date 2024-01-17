import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link,useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {logInComplete, logInFailed, logInStart} from '../redux/user/userSlice'


const Login = () => {
  const [logindetails, setLoginDetails] = useState({});
 

  const {error, loading} = useSelector((state) => state.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setLoginDetails((prev) => ({
      ...prev, 
      [e.target.id] : e.target.value
    }))
  };

  const submitHandler =async (e) => {
    e.preventDefault();
    try {
      dispatch(logInStart())
      const res = await fetch('/api/auth/login', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(logindetails)
      });
      const data = await res.json();
      if(data.success === false) {
        dispatch(logInFailed(data.message))
        return;
      }
      dispatch(logInComplete(data))
      navigate('/');
    } catch (error) {
      dispatch(logInFailed(error.message))
    }
  };

  return (
    <div className={classes.signin}>
      <h1 className="text-bold text-center my-5"> Login</h1>
      <form className="d-flex flex-column" onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3"
          onChange={handleChange}
        />
        <button className={`btn p-3 ${classes.signinbtn}`}>
          {loading?"Loading....":"LogIn"}
        </button>
      </form>
      <div className="d-flex justify-content-end mt-4">
        <p>Dont have an account?</p>
        <Link to={"/signup"}>
          <span className="mx-2 underline">singn up</span>
        </Link>
      </div>
      {error? <p className="text-red-600 text-left">{error}</p>:""}
    </div>
  );
};

export default Login;
