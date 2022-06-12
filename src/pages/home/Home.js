import React from 'react';
import AboutMe from './AboutMe';
import Educations from './Educations/Educations';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const Home = () => {
    return (
        <div >
           <Nav></Nav> 
           <Header></Header>
           <AboutMe></AboutMe>
           <Educations></Educations>
           <Footer></Footer>
        </div>
    );
};

export default Home;