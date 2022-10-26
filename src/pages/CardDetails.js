import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const data = useLoaderData();
    const { title, image, description } = data;
    console.log(data);
    return (
        <div className='mt-8'>
            <h1 className='text-3xl font-bold'>Programming Language Name: <span className='text-violet-700 text-4xl font-bold'>{title}</span></h1>
            <div>
                
            </div>
        </div>
    );
};

export default CardDetails;