import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation();


    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}} replace={true} />
  
}

export default PrivetRoute