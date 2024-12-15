import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation();
    if(loading){
        return      <div className="flex min-h-screen justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;