import React, { useContext } from 'react';
import { Link, NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {FaCircleUser} from 'react-icons/fa6';

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
      .then(res => {
          console.log(res.user)
      })
      .catch(err => console.error(err.message));

      navigate('/register');
  }

    return (
        <>
           <div className="navbar bg-transparent h-[10vh]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className=" normal-case text-white text-xl font-bold">FitFlow</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex gap-12 px-1">
      <NavLink to={'/'}
        className={({ isActive, isPending }) =>
        isPending ? "text-white" : isActive ? "text-[#97c569]" : `${location.pathname === '/' || location.pathname === '/register' ? "text-white" : 'text-black'}`
      }>Home</NavLink>
      <NavLink to={'/register'}
        className={({ isActive, isPending }) =>
        isPending ? "text-white" : isActive ? "text-[#97c569]" : `${location.pathname === '/' || location.pathname === '/register' ? "text-white" : 'text-black'}`
      }>Register</NavLink>
      <NavLink to={'/login'}
        className={({ isActive, isPending }) =>
        isPending ? "text-white" : isActive ? "text-[#97c569]" : `${location.pathname === '/' || location.pathname === '/register' ? "text-white" : 'text-black'}`
      }>Login</NavLink>

    </ul>
  </div>
  <div className="navbar-end">
   
    {
      user ? <> 
      <img src={user.photoURL ? user.photoURL : <FaCircleUser></FaCircleUser>} alt="" className="w-10 h-10 rounded-full mr-4"/>
      <span className='text-gray-200'>{user.displayName ? user.displayName : user.email}</span> 
      <Link to={'/login'} onClick={handleLogOut} className="bg-[#25AB75]   text-white rounded-md py-2 px-7">Sign out</Link>
      </> :
      <Link to={'/login'} className="bg-[#25AB75]   text-white rounded-md py-2 px-7">Sign in</Link>
    }
  </div>
</div> 
        </>
    );
};

export default Navbar;