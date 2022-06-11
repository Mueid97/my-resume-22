
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    AOS.init({duration: 3000});
  },[])
  return (
    <div>
     <Routes>
       <Route path='/' element={<Home></Home>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
