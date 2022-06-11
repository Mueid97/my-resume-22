import React from 'react';

import svg2 from '../../assats/undraw_profile_re_4a55.svg'
const AboutMe = () => {
    return (
        <div className='lg:px-40'>
            <div class="hero min-h-screen bg-base-100 ">
                <div class="hero-content gap-60 flex-col lg:flex-row">
                    <div data-aos="fade-left">
                        <img src={svg2} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div data-aos="fade-right">
                        <h1 class="text-5xl font-bold mb-10 text-orange-600 uppercase">About Me</h1>
                        <p class="text-2xl font-bold">Date Of Birth : 23/June/1997</p>
                        <p class="text-2xl font-bold">Post : FrontEnd Developer</p>
                        <p class="text-2xl font-bold">Language : Bangla, English, Hindi</p>
                        <p class="text-2xl font-bold">Experience : One year</p>
                        <p class="text-2xl font-bold">Projects : <span className='text-4xl text-orange-600' >50+</span> Github Projects</p>
                        <button class="btn btn-outline btn-info mt-10"><a href='https://github.com/Mueid97'>Git-Hub</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;