import React from 'react';

const FAQ = () => {
    return (
        <div className='text-white text-center mb-10'>

            <div className="collapse mt-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                Which technology do you use in this project?
                </div>
                <div className="collapse-content">
                    <p>I used react.js library.</p>
                </div>
            </div>

            <div className="collapse mt-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                Which feature do you think people like most?
                </div>
                <div className="collapse-content">
                    <p>The courses page. It's because you could learn programming language from there.</p>
                </div>
            </div>

            <div className="collapse mt-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                Do you provide any kind of premium feature?
                </div>
                <div className="collapse-content">
                    <p>Yes, you will find a premium option on the courses page.</p>
                </div>
            </div>

            <div className="collapse mt-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                Which page do you think the learner will find most interesting?
                </div>
                <div className="collapse-content">
                    <p>I think it will be the Blog page.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;