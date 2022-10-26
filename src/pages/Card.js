import React from 'react';

const Card = ({ course }) => {
    const { image, title } = course;
    return (
        <div className='border-2 p-2 rounded-lg'>
            <div>
                <img className='h-64 w-full mx-auto  bg-slate-400 rounded-lg' src={image} alt="" />
            </div>
            <div className='flex justify-between pt-2 items-center'>
                <h3>Language Name: <span className='text-violet-700 text-xl font-bold'>{title}</span></h3>
                
                <button className='bg-violet-600 px-2 py-2 rounded-md text-white hover:bg-blue-700'>
                    Start Practice
                </button>
            </div>
        </div>
    );
};

export default Card;