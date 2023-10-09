import React, { useContext } from 'react';
import { Link, NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {FaCircleUser} from 'react-icons/fa6';
import User from '../../assets/images/user1.jpg';

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
    <a className={`${location.pathname === '/' ? "text-white" : "text-black"} tracking-wider normal-case text-2l font-bold`}> <span className='text-[#25AB75] text-4xl'>F</span>itFlow</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex gap-6 px-1">
      <NavLink to={'/'}
        className={({ isActive, isPending }) =>
        isPending ? "text-white" : isActive ? "text-[#25AB75]  uppercase text-xs" : `${location.pathname === '/' || location.pathname === '/' ? "text-gray-200 uppercase text-xs" : 'text-black uppercase text-xs'} `
      }>Home</NavLink>
      <NavLink to={'/register'}
        className={({ isActive, isPending }) =>
        isPending ? "text-white " : isActive ? "text-[#25AB75]  uppercase text-xs" : `${location.pathname === '/' || location.pathname === '/' ? "text-gray-200 uppercase text-xs" : 'text-black uppercase text-xs'}`
      }>Register</NavLink>
      <NavLink to={'/login'}
        className={({ isActive, isPending }) =>
        isPending ? "text-white text-xs" : isActive ? "text-[#25AB75]  uppercase text-xs" : `${location.pathname === '/' || location.pathname === '/' ? "text-gray-200 uppercase text-xs" : 'text-black uppercase text-xs'}`
      }>Login</NavLink>
      {
        user && 
        <>
      <NavLink to={'/createEvent'}
        className={({ isActive, isPending }) =>
        isPending ? "text-white" : isActive ? "text-[#25AB75]  uppercase text-xs" : `${location.pathname === '/' || location.pathname === '/' ? "text-gray-200 uppercase text-xs" : 'text-black uppercase text-xs'}`
      }>Create Event</NavLink>
      <NavLink to={'/findEvent'}
        className={({ isActive, isPending }) =>
        isPending ? "text-white" : isActive ? "text-[#25AB75]  uppercase text-xs " : `${location.pathname === '/' || location.pathname === '/' ? "text-gray-200 uppercase text-xs" : 'text-black uppercase text-xs'}`
      }>Find Event</NavLink>
      </>
      }

    </ul>
  </div>
  <div className="navbar-end">
   
    {
      user ? <> 
      <img src={user.photoURL ? user.photoURL : User } alt="" className="w-10 h-10 rounded-full mr-4"/>
      <span className={`${location.pathname === '/' ? 'text-gray-200 '
      : 'text-black'
      } font-bold mr-2 `}>{user.displayName ? user.displayName : user.email}</span> 
      <Link to={'/login'} onClick={handleLogOut} className="bg-[#25AB75] text-sm  text-white rounded-md py-2 px-4">Signout</Link>
      </> :
      <Link to={'/login'} className="bg-[#25AB75]   text-white rounded-md py-2 px-5">Sign in</Link>
    }
  </div>
</div> 
        </>
    );
};

export default Navbar;