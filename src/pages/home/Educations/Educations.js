import React from 'react';
import img1 from '../../../assats/JZS.jpg'
import img2 from '../../../assats/cam.png'
import img3 from '../../../assats/pust_logo.png'
import EduCard from './EduCard';
const Educations = () => {
    const educations= [
        {
            "id": 1,
        "name": "Jamalpur Zilla School",
        "passing": "2012",
        "dept": "Science",
        "img":  img1,
        },
        {
            "id": 2,
        "name": "Cambrian College",
        "passing": "2014",
        "dept": "Science",
        "img":  img2,
        },
        {
            "id": 3,
        "name": "Pabna University Of science and Technology",
        "passing": "2021",
        "dept": "CSE",
        "img":  img3,
        },
    ]
    
    return (
        <div className='lg:px-40 '>
        <h1 className='text-4xl font-bold text-orange-600 text-center uppercase'>My educations</h1>
            <div data-aos="slide-up" className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10'>
            {
                educations.map(edu=><EduCard key={edu.id} edu={edu}></EduCard>)
            }
            </div>
        </div>
    );
};

export default Educations;