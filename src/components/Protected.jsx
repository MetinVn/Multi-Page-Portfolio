import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/Protect'

const Protected = ({children}) => {
    const {user} = UserAuth()
    if(!user){
        return <Navigate to="/Multi-Page-Portfolio/" />;
    }

  return (
    children
  )
}

export default Protected