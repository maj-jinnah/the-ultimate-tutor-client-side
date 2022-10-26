import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCrown } from 'react-icons/fa';

const CardDetails = () => {
    const data = useLoaderData();
    const { title, image, description, Price} = data;
    // console.log(data);
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'> Programming Language Name: <span className='text-violet-700 text-4xl font-bold'>{title}</span></h1 >

            <div className="mx-auto mt-8 card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{description.slice(0,200) + ' ...'}</p>
                    <p className='mt-5 text-xl text-center'>Want More Information?</p>
                    <div className="card-actions justify-between items-center">
                        <p className='text-lg font-bold'>Price: {Price}</p>
                        <button className='bg-yellow-400 px-2 py-2 rounded-md text-white hover:bg-yellow-500'>
                            <Link to='/checkout' className='flex justify-between items-center text-white-700'> <FaCrown className='mr-2'></FaCrown> Get Premium</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CardDetails;