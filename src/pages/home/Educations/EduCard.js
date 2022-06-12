import React from 'react';

const EduCard = ({ edu }) => {
    const { img, name, passing, dept } = edu;
    return (
        
            <div class="card bg-base-100 shadow-xl my-10">
                <figure class="px-10 pt-10">
                    <img style={{width: '200px', height: '200px'}} src={img}  alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p >Department: <span className='font-bold'>{dept}</span></p>
                    <p>Passing Year: {passing}</p>
                    
                   
                   
                </div>
            </div>
        
    );
};

export default EduCard;