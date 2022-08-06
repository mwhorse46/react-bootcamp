import React, { useState } from 'react';
import './RegistrationForm.css';




const RegistrationForm = () => {

  const [userData, setUserData] = useState({
    username: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    course: '',
    agreedPolicy: false
  })

  const [errors, setErrors] = useState({});


  const handleInputChange = (e) => {

    const isCheckbox = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: isCheckbox
    })
  }

  const {username, fullName, email, phoneNumber, password, confirmPassword, course, agreedPolicy} = userData;
  const handleSubmit = (e) => {
    e.preventDefault();

    const userErrors = {}
    // check validation
    if(username === '') {
      userErrors.username = 'Username is required';
    }

    if(fullName === '') {
      userErrors.fullName = 'FullName is required';
    }

    setErrors(userErrors);
  }


  


  return (
      <div className='body'>
        <div className="main-block">
          <div className="left-part">
            <i className="fas fa-graduation-cap"></i>
            <h1>Register to our courses</h1>
            <p>
            Webdeveloper BD provides learning materials for programming languages like JavaScript, React, Node.js etc.
            </p>
            <div className="btn-group">
              <a className="btn-item" href="https://webdeveloperbd.net/js-bootcamp/">
                Learn JavaScript
              </a>
              <a className="btn-item" href="https://web.facebook.com/groups/code.webdeveloperbd">
                Our Community
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="title">
              <i className="fas fa-pencil-alt"></i>
              <h2>Register here</h2>
            </div>
            <div className="info">
              <div className="input_group">
                <input
                  className="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleInputChange}
                  value={username}
                />
                <p style={{color: 'red'}}>{errors.username}</p>
              </div>

              <div className="input_group">
                <input
                  className="fname"
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  onChange={handleInputChange}
                  value={fullName}
                />
                <p style={{color: 'red'}}>{errors.fullName}</p>
              </div>

              <div className="input_group">
                <input type="email" name="email" placeholder="Email" onChange={handleInputChange} value={email} />
                <p style={{color: 'red'}}>{errors.email}</p>
              </div>

              <div className="input_group">
                <input type="number" name="phoneNumber" placeholder="Phone number" onChange={handleInputChange} value={phoneNumber} />
                <p style={{color: 'red'}}>{errors.phoneNumber}</p>
              </div>

              <div className="input_group">
                <input type="password" name="password" placeholder="Password" onChange={handleInputChange} value={password} />
                <p style={{color: 'red'}}>{errors.password}</p>
              </div>

              <div className="input_group">
                <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleInputChange} value={confirmPassword} />
                <p style={{color: 'red'}}>{errors.confirmPassword}</p>
              </div>
              
              <div className="input_group">
                <select name='course' onChange={handleInputChange} value={course}>
                  <option value="">
                    Select course
                  </option>
                  <option value="js_programming">JavaScript Programming</option>
                  <option value="react_js">Full Stack React</option>
                  <option value="node_js">Professional Node.js</option>
                </select>
                <p style={{color: 'red'}}>{errors.course}</p>
              </div>
            </div>
            
            <div className="checkbox">
              <input type="checkbox" name="agreedPolicy" id='agreed' checked={agreedPolicy === true} onChange={handleInputChange} />
              <span>
                <label htmlFor='agreed'>I agree to the</label> {' '}
                <a href="https://webdeveloperbd.net">
                  Privacy Policy for Web Developer BD.
                </a>
              </span>
            </div>
            <button className='submitBtn' type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
  );
};

export default RegistrationForm;