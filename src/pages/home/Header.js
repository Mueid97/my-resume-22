import React from 'react';
import Typical from 'react-typical'
import svg1 from '../../assats/undraw_freelancer_re_irh4.svg'
const Header = () => {
    return (
        <div className='lg:px-40'>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div data-aos="fade-left">
                        <img src={svg1} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div data-aos="fade-right">
                        <h1 className="text-5xl font-bold">Hi! I am Mustahedur Rahman </h1>
                        <p className="text-5xl font-bold">  And I AM A
                            <Typical className="text-5xl font-bold text-orange-600"
                                steps={[
                                    'SOFTWARE ENGINEER', 2000,
                                    'WEB DEVELOPER', 2000,
                                    'FRONTEND DEVELOPER', 3000,

                                ]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </p>
                        <p class="py-6 font-bold">To work in a competitive
                            Friendly environment where i
                            can apply my knowledge to
                            solve meaningful problems for
                            betterment of human lives and
                            prove myself worthly for the
                            position in the organization.</p>
                        <button class="btn btn-outline"><a href='https://drive.google.com/file/d/10qZ1zNj8pZ-wpwhrKHk3goZtfFOkINk1/view?usp=sharing'>Download Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;