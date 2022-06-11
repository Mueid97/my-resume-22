import React from 'react';
import AboutMe from './AboutMe';
import Header from './Header';
import Nav from './Nav';

const Home = () => {
    return (
        <div >
           <Nav></Nav> 
           <Header></Header>
           <AboutMe></AboutMe>
        </div>
    );
};

export default Home;