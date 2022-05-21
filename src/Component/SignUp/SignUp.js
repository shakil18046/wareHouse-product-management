import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebaseinit';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, errorTwo] = useUpdateProfile(auth);
      const [displayName, setDisplayName] = useState('');
      const navigate = useNavigate();
      const navigateLogin = ()=>{
        navigate("/Login")
      }
      // create new user
      const handleSignup = async (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
      }
    return (
        <div>
           <h2 className='text-center'>Please SignUp</h2>
            <form className='w-50 m-auto' onSubmit={handleSignup}>
            <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">User Name</label>
    <input type="text" className="form-control" name='name' id="exampleInputName"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' className="form-control" id="exampleInputPassword1"/>
  </div>
  <div>
  <p>New to here <Link to="/Login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
  </div>
  <div><button type="submit" className="btn btn-primary">Sign Up</button></div>
</form>


        </div>
    );
};

export default SignUp;