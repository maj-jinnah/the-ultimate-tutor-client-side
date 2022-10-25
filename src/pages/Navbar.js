import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar bg-slate-500 px-5 md:px-10">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-4xl text-white">UltimateTutor</Link>
            </div>
            <div className="flex-none gap-2">
                <ul className='flex gap-8 p-2 text-white text-lg hidden md:flex'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/login'>LogIn</Link></li>
                    
                </ul>
                <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn btn-ghost ">
                        <div className="w-10 rounded-full">
                            {/* <img src="https://placeimg.com/80/80/people" className='btn-circle avatar' /> */}
                            <FaBars className='text-2xl mx-auto' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/login'>LogIn</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;