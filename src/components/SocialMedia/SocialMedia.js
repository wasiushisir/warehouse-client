import React from 'react';
import img from '../../image/gggoogle (1).png'
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

const SocialMedia = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user,  error] = useSignInWithGoogle(auth);
    if(user)
    {
        navigate('/home')

    }
    return (
        <div>
            <button onClick={()=>signInWithGoogle()} className='d-block w-50 mx-auto btn btn-primary mb-4'><span> <img style={{width:'35px'}} src={img} alt="" /> </span>Google SignIn</button>
            <p> {error?.message}</p>
            
        </div>
    );
};

export default SocialMedia;