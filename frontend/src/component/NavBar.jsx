import React from 'react'
import classes from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const handlelogout = () => {

  }
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className={`${classes.nav}`}>
      <div className={classes.title}><span>TodoList</span></div>
      <div className={classes.Tags}>
        {currentUser && <sapn><Link to={'/'}>Home</Link></sapn>}
        {!currentUser && <sapn><Link to={'/login'}>Login</Link></sapn>}
        {!currentUser && <sapn><Link to={'/signup'}>Signup</Link></sapn>}
        {currentUser && <span><Link to={'/profile'}>Profile</Link></span>}
        
      </div>
    </div>
  )
}

export default NavBar