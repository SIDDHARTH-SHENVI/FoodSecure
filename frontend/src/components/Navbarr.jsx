import React, { useEffect, useState } from 'react'
import Login from './Login';

import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';


function Navbarr() {
const [authUser,setAuthUser]=useAuth();
console.log(authUser);
 
  const[sticky,setSticky]=useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        setSticky(true);
      }else{
        setSticky(false);
      }
    };
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    };
  },[])
  const navItems=(<>
  <li><a href='/'>Home</a></li>
      <li><a href='/donors'>Browse</a></li>
      <li><a href='/hotels'>Donations</a></li>
      <li><a href='/vol'>Volunteer</a></li></>)
  return (<>
    <div className={`max-w-screen-2xl container mx-auto md:px px-4 fixed top-0 left-0 right-0 ${
      sticky?"sticky-navbar shadow-md bg-base-200  duration-300 transition-all ease-in-out"
      :""
    }`}
    >
    <div className="navbar  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navItems}
      </ul>
    </div>
    <a href='/' className=" text-2xl font-bold cursor-pointer">FoodSecure</a>
  </div>
  <div className="navbar-end space-x-3">

  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
      
    </ul>
  </div>
  <div className='hidden md:block'>
</div>
<label className="swap swap-rotate">
  
</label>

{
  authUser ? (<Logout/>):(
  <div className="">
    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" 
    onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a>
    <Login/>
  </div> 
)}

  
</div>
</div>
    </div>
  </>)
}

export default Navbarr
