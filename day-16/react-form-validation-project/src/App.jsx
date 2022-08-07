import React, { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import SurveyForm from './components/SurveyForm';




const App = () => {

  const [showButton, setShowButton] = useState(true);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showSurveyForm, setShowSurveyForm] = useState(false);
  
  const handleRegistrationForm = () => {
    
    setShowRegistrationForm(true);
    setShowButton(false);
  }

  const handleSurveyForm = () => {
    
    setShowSurveyForm(true);
    setShowButton(false);
  }




  
  return (
    <div style={{backgroundColor: '#7F7F7F', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

      {
        showButton && <>
          <button className='registration_btn' onClick={handleRegistrationForm}>Register Form</button>
          <button className='registration_btn' onClick={handleSurveyForm}>Survey Form</button>
        </>
      }
      

      {
        showRegistrationForm && <RegistrationForm setShowRegistrationForm={setShowRegistrationForm} setShowButton={setShowButton} />
      }

      {
        showSurveyForm && <SurveyForm />
      }
    </div>
  );
};

export default App;