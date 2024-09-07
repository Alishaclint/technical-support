import React, { useState } from 'react'
import './Auth.css'
import loginimg from '../../assets/images/login.png'
const Auth = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({});
    
      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Validate inputs
      const validate = () => {
        let inputErrors = {};
    
        if (!formData.email) {
          inputErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          inputErrors.email = 'Email is invalid';
        }
    
        if (!formData.password) {
          inputErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
          inputErrors.password = 'Password must be at least 6 characters long';
        }
    
        setErrors(inputErrors);
    
        // Return true if there are no errors
        return Object.keys(inputErrors).length === 0;
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
    
        // If form is valid, you can perform a login action here
        if (validate()) {
          console.log('Form submitted successfully:', formData);
          // Perform further actions like sending the data to an API
        }
      
      };

  return (
    <div className='login'>
    <div className='loginimg'>
        <img src={loginimg} alt="" />
    </div>
    <div className='loginpage'>
    <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Employee Id</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button 
         type="submit" className="btn">
        <a href="home">Login</a>
        </button>
        <a className='new' href="">new account</a>
        <a className='forgot' href="">forgot password</a>
      </form>
    </div>
</div>
  )
}

export default Auth