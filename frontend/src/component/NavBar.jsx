import React from 'react'
import classes from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={`${classes.nav}`}>
      <div className={classes.title}><span>TodoList</span></div>
      <div className={classes.Tags}>
        <sapn><Link to={'/'}>Home</Link></sapn>
        <sapn><Link to={'/login'}>Login</Link></sapn>
        <sapn><Link to={'/signup'}>Signup</Link></sapn>
      </div>
    </div>
  )
}

export default NavBar