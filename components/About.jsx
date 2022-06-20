import React from "react";
import Image from 'next/image';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#f87171]'>About</p>
                    <h2 className='py-4'>Who Am I?</h2>
                    <p className='py-2 text-gray-600'>I received my qualification from WeThinkCode_ at their Johannesburg Campus where I learned
                        how to read and write code and got experienced in testing code in order to measure the effectiveness
                        of software programs, backend services and user interfaces. Also got hands- on experience with Fullstack
                        Development and System Development</p>

                    <p className='py-2 text-gray-600'>I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge
                        set, as continuing to learn new languages and development techniques are important to me and the success
                        of your the organization I work for.</p>

                    <p className='py-2 text-gray-600'>With a relevant qualification in Information Technology: Software Development and hands-on experience using
                        both Front-end and Back-end technologies namely: Angular, JavaScript, HTML and CSS for any web-development,
                        Java and SpringBoot for the backend to create and implement software applications. I am confident I will be
                        an asset to your organization.</p>

                    <p className='py-2 text-gray-600 underline cursor-pointer'> Check out some of my projects :)</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src='/gradpic.png' width='300' height='400' alt='/'/>
                </div>
            </div>
        </div>
    );
};

export default About;