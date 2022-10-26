import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ course }) => {
    const { image, title, id } = course;
    return (
        <div className='border-2 p-2 rounded-lg'>
            <div>
                <img className='h-64 w-full mx-auto  bg-slate-400 rounded-lg' src={image} alt="" />
            </div>
            <div className='flex justify-between pt-2 items-center'>
                <h3>Language Name: <span className='text-violet-700 text-2xl font-bold'>{title}</span></h3>
                
                <button className='bg-violet-600 px-2 py-2 rounded-md text-white hover:bg-blue-700'>
                    <Link to={`/courses/${id}`}>Start Now</Link>
                </button>
            </div>
        </div>
    );
};

export default Card;