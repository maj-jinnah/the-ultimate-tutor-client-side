import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const data = useLoaderData();
    const { title, Creator_img, Creator, time, price } = data;
    
    const handelToast = () => {
        toast.success('Thanks for buying the course!')
    }

    return (
        <div className='my-10'>
            <div className="md:w-2/4 w-full mx-auto text-white">
                <h1 className='text-3xl text-center mb-5'>Name of your course: <span className='text-4xl font-semibold'>{title}</span></h1>
                <div className="bg-base-300 rounded-box py-5 px-5 flex justify-evenly">
                    <div>
                        <img style={{ hight: '100px', width: '100px' }} src={Creator_img} alt="" />
                        <p>{Creator}</p>
                    </div>
                    <div className='my-auto'>
                        <p className='mb-2'>Total Time: {time}</p>
                        <p className='mb-2'>Total Price: {price}</p>
                        <button onClick={handelToast} className="btn btn-outline btn-success">Purchase Course</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;