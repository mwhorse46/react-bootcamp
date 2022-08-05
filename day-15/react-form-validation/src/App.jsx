import React, { useState } from 'react';




const App = () => {

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    gender: ''
  });
  const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      email: '',
      profession: '',
      gender: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {   
    setUserData({...userData, [e.target.name]: e.target.value});
    setErrors({...errors, [e.target.name]: ''})
  }
  

  const {firstName, lastName, email, profession, gender} = userData;
  const handleSubmit = (e) => {
    e.preventDefault();

    const userErrors = {
      firstName: '',
      lastName: '',
      email: '',
      profession: '',
      gender: ''
    }

    // validation
    if(firstName === '') {
      userErrors.firstName = 'FirstName is required';
    }

    if(lastName === '') {
      userErrors.lastName = 'LastName is required';
    }

    if(email === '') {
      userErrors.email = 'Email is required';
    }

    if(profession === '') {
      userErrors.profession = 'Profession is required';
    }

    if(gender === '') {
      userErrors.gender = 'Gender is required';
    }

    setErrors(userErrors);

    // form is valid
    if(Object.values(userErrors).some(elm=> elm.length > 0)){
      return;
    }

    // api request 
    setSubmitted(true);
  }




  return (
    <>

    {
      submitted && <h2>Form is successfully submit</h2>
    }

      {
        !submitted && 
          <div>
            <h1>React form data handling</h1>
            <hr />
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">FirstName</label>
              <input type="text" name="firstName" id="firstName" onChange={handleInputChange} value={firstName} />
              <p style={{color: 'red'}}>{errors.firstName}</p>

              <br />

              <label htmlFor="lastName">LastName</label>
              <input type="text" name="lastName" id="lastName" onChange={handleInputChange} value={lastName} />
              <p style={{color: 'red'}}>{errors.lastName}</p>
              <br />

              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" onChange={handleInputChange} value={email} />
              <p style={{color: 'red'}}>{errors.email}</p>
              <br />

              <label htmlFor="profession">Profession</label>
              <select name="profession" id="profession" onChange={handleInputChange} value={profession}>
                <option value="" disabled>Please select your profession</option>
                <option value="webDeveloper">Web Developer</option>
                <option value="softwareDeveloper">Software Developer</option>
                <option value="jsDeveloper">JS Developer</option>
              </select>
              <p style={{color: 'red'}}>{errors.profession}</p>

              <br />
              
              <input type="radio" name="gender" value="male" checked={gender === 'male'} id='male' onChange={handleInputChange} />
              <label htmlFor="male">Male</label>

              <input type="radio" name="gender" value="female" checked={gender === 'female'} id='female' onChange={handleInputChange} />
              <label htmlFor="female">Female</label>
              <p style={{color: 'red'}}>{errors.gender}</p>
              <br />
              <br />
              <input type="submit" value="Submit" />

            </form>
          </div>
      }
    </>
  );
};

export default App;