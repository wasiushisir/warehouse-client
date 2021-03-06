import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    
    const [user, loading, error] = useAuthState(auth);
    const location=useLocation();
    if(loading)
    {
        return <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }


    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;