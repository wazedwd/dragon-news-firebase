import { Link, NavLink } from "react-router-dom";
import userImg from '../assets/images/user.png';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);
    const handleSignOut = ()=>{
     signOutUser()
     .then(()=>console.log('sign out successfully'))
     .catch((error)=> console.log(error.message));
    }

    const navLink = <>
    <li><NavLink style={{textDecoration: 'none'}} to='/'>Home</NavLink></li>
    <li><NavLink style={{textDecoration: 'none'}} to='/about'>About</NavLink></li>
    <li><NavLink style={{textDecoration: 'none'}} to='/career'>Career</NavLink></li>
    <li><NavLink style={{textDecoration: 'none'}} to='/login'>Login</NavLink></li>
    </>
    return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex gap-3">
    <img className="w-[40px] h-[40px]" src={userImg} alt="" />
    {user ? <button onClick={handleSignOut} className="bg-gray-500 font-semibold py-3 px-5 rounded-sm border-none text-black">Log out</button>:<Link to='/login' style={{textDecoration: 'none'}} className="bg-gray-500 font-semibold py-3 px-5 rounded-sm text-black">Login</Link>
    }
    </div>
  </div>
</div>
);
};

export default Navbar;