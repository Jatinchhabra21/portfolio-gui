/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './home.css';
import { resume } from '../../utility/resumeBuilder';

const Home = ({ reference }) => {
    const [toggle, setToggle] = useState(true);
    const [toToggle1, setToToggle1] = useState(false);
    const [toToggle2, setToToggle2] = useState(true);
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        if (toggle) {
            setTimeout(() => setToToggle1(true), 3500);
            setToToggle2(false);
        } else {
            setTimeout(() => setToToggle2(true), 3500);
            setToToggle1(false);
        }
        setTimeout(() => setToggle((prevValue) => !prevValue), 4000);
    }, [toggle]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(reference.current);
            }
        });
        observer.observe(reference.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={reference} className={isVisible ? ' is-visible' : ''}>
            {toggle ? (
                <div
                    className={`p-6 text transition-opacity ${toToggle1 ? 'opacity-0' : ''
                        }`}
                >
                    <div className='container mt-20 mx-auto flex flex-col text-center md:text-start'>
                        <p className='subheading'>HELLO!</p>
                        <h1 className='heading mb-4 wrap1'>
                            I'm <span>{resume.name}</span>
                        </h1>
                        <h2 className='heading2 mb-4'>{resume.headline}</h2>
                        <div className='flex gap-2 justify-center md:justify-start'>
                            <a href={`mailto:${resume.email}`}>
                                <button className='btn btn-primary py-3 px-4'>CONTACT ME</button>
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className={`p-6 text transition-opacity ${toToggle2 ? 'opacity-0' : ''
                        }`}
                >
                    <div className='container mt-20 mx-auto flex flex-col text-center md:text-start'>
                        <p className='subheading'>HELLO!</p>
                        <h1 className='heading mb-4 wrap2'>
                            I'm a <span>{resume.jobName}</span> based in India
                        </h1>
                        <div className='flex gap-2 justify-center md:justify-start'>
                            <a href={`mailto:${resume.email}`}>
                                <button className='btn btn-primary py-3 px-4'>CONTACT ME</button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Home;
