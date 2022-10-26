import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from './Card';
import CardDetails from './CardDetails';

const Courses = () => {
    const courses = useLoaderData();

    // console.log(courses);

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-12 gap-3'>
            <div className='md:col-span-3 mt-10'>
                <h1 className='text-2xl font-bold text-violet-600'>Courses list:</h1>
                {
                    courses.map(course => <p key={course.id} className='my-5'><button>
                        <Link to={`/courses/${course.id}`}>{course.title}</Link>
                        
                    </button></p>)
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