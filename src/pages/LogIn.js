import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h1 className="pt-4 px-16 text-4xl font-bold">Login now</h1>
                        <p className='text-center'>Log in to access your account</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                {/* <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link> */}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log In</button>
                            <p className='text-center mt-3'>Don't have an account yet? <Link to='/register'> <span className='text-white'>Sign up .</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;