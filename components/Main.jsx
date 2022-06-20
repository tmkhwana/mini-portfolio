import React from 'react';
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillPersonLinesFill} from "react-icons/bs";
import Link from "next/link";

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        LET'S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm <span className='text-[#f87171]'>Thembile</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        A Software Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I am a self-motivated and hardworking individual seeking for an opportunity to work in a challenging environment
                        to prove my skills and utilize my knowledge &intelligence in the growth of the organization.
                        I am passionate in developing innovative programs that expedite the efficiency and effectiveness of organizational success and
                        writing code to create systems that are reliable and user-friendly.
                    </p>

                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        The first-hand insight and knowledge that I would garner from SovTech, I believe would make a huge impact on my carrer growth.
                        Getting into this graduate programme would mean being surrounded by leading thinker, seniors in the tech field that I'd be able
                        to draw knowledge and experience from.
                    </p>
                    <div className='flex items-center justify-between max-w-[300px] m-auto py4'>
                        <a href='https://www.linkedin.com/in/thembile-mkhwanazi-917165192/'
                           target='_blank'
                           rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn/>
                            </div>
                        </a>
                        <a href='https://github.com/tmkhwana'
                           target='_blank'
                           rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub/>
                            </div>
                        </a>
                        <Link href='/#contact'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                        </Link>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;