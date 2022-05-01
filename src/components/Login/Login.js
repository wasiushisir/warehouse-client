import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/login (2).jpg'
import SocialMedia from '../SocialMedia/SocialMedia';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router';

const Login = () => {
    const emailRef=useRef();
    const passRef=useRef();
    const navigate=useNavigate();




    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


      const handleLogin=(event)=>{
          event.preventDefault();
          const email=emailRef.current.value;
          const password=passRef.current.value;
          console.log(email,password);
          signInWithEmailAndPassword(email, password)


      }

      if(user){
          navigate('/home');
      }

    
    return (
        <div style={{ background: '#F0F8FF' }}>
            <h2 className='text-center'>Please Login!!!!!!</h2>
            <div className="row ">
                <div className='col-lg-6 col-sm-12 '>
                    <div className='ms-5  pb-5'>
                        <img style={{ width: '75%' }} src={img} alt="" />
                    </div>

                </div>
                <div className='col-lg-6 col-sm-12'>
                    <div className='w-50 mx-auto'>



                        <form onSubmit={handleLogin}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input ref={emailRef} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input ref={passRef} type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <p>New in Fr Telecom<span className='text-primary   ps-2'><Link className='text-decoration-none' to='/registration'>Please register</Link></span></p>
                            <p className='text-center'> {error?.message}</p>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>


                    <div className='d-flex align-items-center mt-3'>
                        <div style={{height:'1px'}} className='w-50 mx-auto bg-primary'>

                        </div>
                        <p className='pt-2 px-2'>or</p>
                        <div style={{height:'1px'}} className='w-50 mx-auto bg-primary'>

                        </div>

                    </div>

                    <SocialMedia></SocialMedia>








                </div>

            </div>


        </div>
    );
};

export default Login;