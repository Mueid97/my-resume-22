import React from 'react';
import AboutMe from './AboutMe';
import Educations from './Educations/Educations';
import Footer from './Footer';
import Header from './Header';
import Working from './Working/Working';


const Home = () => {
    return (
        <div >
          
           <Header></Header>
           <AboutMe></AboutMe>
           <Educations></Educations>
           <Working></Working>
           <Footer></Footer>
        </div>
    );
};

export default Home;