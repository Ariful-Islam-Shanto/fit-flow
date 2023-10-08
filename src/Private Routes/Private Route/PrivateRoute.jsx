import React, { useContext } from 'react';
import Details from '../Details/Details';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user) {
        return children;
    }
    else{
        toast.error('Please login to see details');
        return <Navigate to={'/login'}></Navigate>
    }
    
};

export default PrivateRoute;