import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCrown } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CardDetails = () => {
    const data = useLoaderData();
    const { title, image, description, price, id } = data;

    return (
        <div>
            <div className='ml-10 mt-5'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className="btn btn-success text-base" onClick={toPdf}>Download Pdf</button>}
                </Pdf>
            </div>
            <div ref={ref} className='mb-10'>
                <h1 className='text-3xl font-bold text-center text-white'> Programming Language Name: <span className='text-violet-700 text-4xl font-bold'>{title}</span></h1 >
                <div className="mx-auto mt-8 card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>{description}</p>
                        <div className="card-actions justify-between items-center">
                            <p className='text-lg font-bold text-white text-center my-2'>Price: {price}</p>
                            <button className='btn  bg-yellow-400 text-base rounded-md text-white hover:bg-yellow-500'>
                                <Link to={`/checkout/${id}`} className='flex justify-between items-center text-white-700'> <FaCrown className='mr-2'></FaCrown> Get Premium</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default CardDetails;