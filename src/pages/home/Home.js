import React from 'react';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const Home = () => {
    return (
        <div >
           <Nav></Nav> 
           <Header></Header>
           <AboutMe></AboutMe>
           <Footer></Footer>
        </div>
    );
};

export default Home;