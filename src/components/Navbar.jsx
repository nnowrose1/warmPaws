import React, { use } from 'react';
import { NavLink, Link, useNavigate } from 'react-router';
import logo from '../assets/logo1.png'
import { AuthContext } from '../context/AuthContext';
import { FiLogOut } from 'react-icons/fi';
import { toast } from 'react-toastify';
import userimg from '../assets/user.png'

const Navbar = () => {
    const {user, logOut, setUser} = use(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut().then(() => {
            setUser(null);
            toast.success("Logout Successful!");
            navigate('/auth/login');
        })
        .catch(() => {})
    }
    const links = <>
    <li className='font-semibold text-lg text-primary'><NavLink to={'/'}>Home</NavLink></li>
    <li className='font-semibold text-lg text-primary'><NavLink to={'/services'}>Our Services</NavLink></li>
    <li className='font-semibold text-lg text-primary'><NavLink to={'/profile'}>My Profile</NavLink></li>
    </>

    return (
        <nav className="navbar shadow-sm w-full mx-auto bg-orange-200 z-50 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links} 
        
      </ul>
    </div>
    <div className='flex flex-col md:flex-row items-center'>
        <img className='w-20 h-20 rounded-full ' src={logo} alt="" />
    <a className="btn btn-ghost text-xl md:text-2xl text-primary font-bold md:font-extrabold">WarmPaws</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-2 items-center">
    
    {/* Tooltip from daisyUI */}

  <div className="tooltip" data-tip={user?.displayName ? (user?.displayName) : "User"}>
    {user &&
    <img  className='h-12 w-12 rounded-full cursor-pointer' src={user?.photoURL ? (user?.photoURL): userimg}></img> 
    }
  </div>

       
    {user ? <button onClick={handleLogout} className="btn bg-primary rounded-md text-white"><FiLogOut />Logout</button> :  <Link to='/auth/login' className="btn bg-primary rounded-md text-white">Login</Link> }
    </div>
</nav>
    );
};

export default Navbar;