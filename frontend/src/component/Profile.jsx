import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {logOutComplete,logOutFailed,logOutStart} from '../redux/user/userSlice'

const Profile = () => {
  const {currentUser} = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handlelogout = async () => {
    dispatch(logOutStart())
    try {
      const res = await fetch('/api/auth/signout');
      const data = res.json();
      if(data.success === false){
        dispatch(logOutFailed(data.message));
        return;
      }
      dispatch(logOutComplete(data));
    } catch (error) {
      dispatch(logOutFailed(error.message))
    }
  }

  return (
    <div>
      {currentUser && <span onClick={handlelogout}>Logout</span>}
    </div>
  )
}

export default Profile