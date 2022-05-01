import React from 'react';
import {  signOut } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router';

const Logout = () => {
    const navigate=useNavigate();
    const [user, loading, error] = useAuthState(auth);
    
    signOut(auth);
    if(!user)
    {
        navigate('/home')

    }
    
    return (
        <div>
            
        </div>
    );
};

export default Logout;