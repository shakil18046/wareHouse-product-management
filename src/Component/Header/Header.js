import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebaseinit';
import "./Header.css"
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  if(loading){
    return <p>loading......</p>
  }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid container">
    <Link className="navbar-brand" to="/">ZAKAMART</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-linkLink active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkLink" to="/Blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          {
            user ? <Link className="nav-linkLink" to="/ManageItems">Manage Items</Link> : ""
          }
        </li>
        <li className="nav-item">
          {
            user ? <Link className="nav-linkLink" to="/AddItems">Add Item</Link> : ""
          }
        </li>
        <li className="nav-item">
         {
           user ?  <Link className="nav-linkLink" to="/MyItem">My Item</Link> : ""
         }
        </li>
        <li className="nav-item">
          {   user? 
            <button className='signOut' onClick={logout}> sign Out</button> :
              <Link className="nav-linkLink" to="/Login">sign in</Link> 
              
              
          }
        </li>
      </ul>
    </div>
  </div>
            </nav>
        </div>
    );
};

export default Header;