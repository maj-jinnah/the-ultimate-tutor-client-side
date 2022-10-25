import React from 'react';

const Courses = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-12 gap-3'>
            <div className='md:col-span-4 border-2'>
                Courses List
            </div>

            <div className='md:col-span-8 border-2'>
                Course Card
            </div>

        </div>
    );
};

export default Courses;