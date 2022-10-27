import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {

    const {user, loading }= useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <progress className="mx-auto progress w-56 bg-green-400"></progress>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;

};

export default PrivetRoute;