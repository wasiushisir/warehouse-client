import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/reg.jpg'
import SocialMedia from '../SocialMedia/SocialMedia';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router';


const Registration = () => {
    const navigate=useNavigate();
    const nameRef=useRef();
    const emailRef=useRef();
    const passRef=useRef();
    const addressRef=useRef();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const handleRegistration=(event)=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passRef.current.value;
        console.log(email,password);
        createUserWithEmailAndPassword(email, password)


    }


    if(user)
    {
        navigate('/home');

    }






    return (
        <div style={{background:'#FFDEAD'}}>
            <h2 className='text-center  pt-3 pb-5'  >Please Registration!!!</h2>
            <div className="row">
                <div className='col-lg-6 col-sm-12 '>
                    <div className='ms-5  pb-5 pt-3'>
                        <img style={{width:'75%'}} src={img} alt="" />

                    </div>

                </div>
                <div className='col-lg-6 col-sm-12'>
                    <div className='w-50 mx-auto'>
                    <form onSubmit={handleRegistration}>
                    <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text"></div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input ref={emailRef} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text"></div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="exampleInputAddress" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text"></div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input ref={passRef} type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <p>Already have an account<span className='ps-2'><Link className='text-decoration-none ' to='/login'>Please login</Link></span></p>
                            <p className='text-danger'>{error?.message}</p>

                            <button style={{background:'#D18522'}} type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>

                    
                    <div className='d-flex align-items-center mt-3'>
                        <div style={{height:'1px',background:'#D18522'}} className='w-50 mx-auto'>

                        </div>
                        <p className='pt-2 px-2'>or</p>
                        <div style={{height:'1px',background:'#D18522'}} className='w-50 mx-auto'>

                        </div>

                    </div>

                    <SocialMedia></SocialMedia>





                </div>

            </div>
            
        </div>
    );
};

export default Registration;