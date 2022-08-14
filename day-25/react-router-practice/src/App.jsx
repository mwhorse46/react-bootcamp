import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './assets/components/About';
import Contact from './assets/components/Contact';
// import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import Home from './assets/components/Home';



const App = () => {
  return (
    <div className='text-center'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;