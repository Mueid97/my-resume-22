import React from 'react';
import work from '../../../assats/undraw_Designer_re_5v95.png'
const Working = () => {
    return (
        <div data-aos="fade-left">
            <h1 className='text-4xl font-bold mb-10 text-orange-600 text-center uppercase'>Working Experience</h1>
            <div class="hero min-h-screen" style={{backgroundImage: `url(${work})`}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w">
                        <h1 class="mb-5 text-5xl font-bold">Former Web Developer at Webtricker</h1>
                        <h1 class="mb-5 text-4xl font-bold">(02/Jun/2021 To 10/Feb/2022 )</h1>
                        
                        <p class="mb-5 text-2xl">Achievements/Tasks</p>
                        <li>Website design</li>
                        <li>PSD to HTlM</li>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Working;