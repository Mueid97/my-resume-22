
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Projects from './pages/home/Projects/Projects';
import Blogs from './pages/home/Blogs/Blogs';
import ContactMe from './pages/ContactMe/ContactMe';
function App() {
  useEffect(()=>{
    AOS.init({duration: 3000});
  },[])
  return (
    <div>
     <Routes>
       <Route path='/' element={<Home></Home>} ></Route>
       <Route path='projects' element={<Projects></Projects>} ></Route>
       <Route path='blogs' element={<Blogs></Blogs>} ></Route>
       <Route path='contact' element={<ContactMe></ContactMe>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
