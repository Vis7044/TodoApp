import React from 'react'
import classes from './Signup.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userdetails, setUserDetails] = useState({})
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserDetails((prev) => ({
      ...prev, 
      [e.target.id]: e.target.value,
    }))
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res =await fetch('/api/auth/signup', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdetails)
      });
      const data = await res.json()
      if(data.success === false) {
        setError(data.message)
        return;
      }
      setError(null);
      navigate('/login')
    } catch (error) {
      setError(error.message)
    }
    
  };
  return (
    <div className={classes.signin}>
      <h1 className="text-bold text-center my-5"> SignUp</h1>
      <form className="d-flex flex-column" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3"
          onChange={handleChange}
        />
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
          SignUp
        </button>
      </form>
      <div className="d-flex justify-content-end mt-4">
        <p>Already have an account?</p>
        <Link to={"/login"}>
          <span className="mx-2 underline">Login</span>
        </Link>
      </div>
    </div>
  )
}

export default Signup