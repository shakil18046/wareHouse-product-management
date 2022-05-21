import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebaseinit';
import google from "../../img/google.png"
import "./Login.css"
const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const navigateRegister = (e)=>{
      e.preventDefault();
      navigate("/SignUp");
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, userTwo, loadingTwo, errorTwo] = useSignInWithGoogle(auth);

      if(loading || loadingTwo){
        return <p>loading......</p>
      }
      console.log(user, userTwo);
      if(user || userTwo){
        console.log(user,userTwo);
       
        return navigate(from, { replace: true });
      }
      // user login

      const handleLogin = async (e)=>{
          e.preventDefault();
        const email = e.target.email.value
        const pass = e.target.password.value
        await signInWithEmailAndPassword(email, pass);
        
      }
     
      
      
    return (
        <div className='container'>
          <h2 className='text-center'>Please Login</h2>
            <form className='w-50 m-auto' onSubmit={handleLogin}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' className="form-control" id="exampleInputPassword1"/>
  </div>
{
    <p className='login-error'>{error?.message}</p>
}
<p>New to here? <Link to="/SignUp" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

  <div>
  <button type="submit" className="btn btn-primary">Login</button>
  </div>
</form>
<div className='w-50 m-auto pt-5'>
  <button onClick={() => signInWithGoogle()} className='signInWithGoogle'> <img src={google} alt=''/>sign in with google</button>
</div>
        </div>
    );
};

export default Login;