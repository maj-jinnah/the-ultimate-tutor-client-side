import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser } from "react-icons/fa";
import photo from '../assets/video-tutorials (1).png'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-slate-500 px-5 md:px-10">
            <div className="flex-1">
                <img className='h-14 w-14' src={photo} alt="" />
                <div className='text-white text-3xl font-semibold'>
                    <h1>Ultimate</h1>
                    <h1>Tutor</h1>
                </div>
            </div>
            <div className="flex-none gap-2">
                <ul className='flex gap-8 p-2 text-white text-lg hidden md:flex'>
                    <div>
                        {/* <input type="checkbox" className="toggle" check /> */}
                    </div>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    {
                        user?.uid ?
                            <li><button onClick={handelLogOut}>LogOut</button></li> :
                            <li><Link to='/login'>LogIn</Link></li>
                    }
                </ul>
                <div className='hidden md:flex items-center'>
                    <p className='text-white'>{user?.displayName}</p>
                    {user?.photoURL ?
                        <img className='rounded-xl' style={{ hight: '30px', width: '30px' }} src={user.photoURL} alt=''></img> :
                        <FaUser></FaUser>
                    }

                </div>

                <div className="dropdown dropdown-end md:hidden">

                    <label tabIndex={0} className="btn btn-ghost ">
                        <div className="w-10 rounded-full">
                            {/* <img src="https://placeimg.com/80/80/people" className='btn-circle avatar' /> */}
                            {/* <FaBars className='text-2xl mx-auto' /> */}


                            {user?.photoURL ?
                                <img className='rounded-lg' style={{ hight: '40px', width: '40px' }} src={user.photoURL} alt=''></img> :
                                <FaBars className='text-2xl mx-auto' />
                            }


                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {<p className='text-white'>{user?.displayName}</p>}
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        {
                            user?.uid ?
                                <li><button onClick={handelLogOut}>LogOut</button></li> :
                                <li><Link to='/login'>LogIn</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;