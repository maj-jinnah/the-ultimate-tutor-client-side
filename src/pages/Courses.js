import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Courses = () => {
    const courses = useLoaderData();

    // console.log(courses);

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-12 gap-3'>
            <div className='md:col-span-3 mt-10'>
                {
                    courses.map(course => <p  key={course.id} className='my-5'><button> {course.title}</button></p>)
                }
            </div>

            <div className='md:col-span-9'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 my-10 mx-5 gap-3'>
                    {
                        courses.map(course => <Card key={course.id} course={course}></Card>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Courses;