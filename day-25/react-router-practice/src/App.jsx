import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './assets/components/About';
import Company from './assets/components/Company';
import Contact from './assets/components/Contact';
import Founder from './assets/components/Founder';
// import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import Home from './assets/components/Home';
import NotFound from './assets/components/NotFound';

// complete video upto 31 minute
const App = () => {
  return (
    <div className='text-center'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          
          <Route path='/about' element={<About />}>
            <Route path='company/:name' element={<Company />}></Route>
            <Route path='founder' element={<Founder />}></Route>
          </Route>

          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;