import React, { useState } from 'react'
import './Tickets.css'


const Tickets = () => {

    const [formData, setFormData] = useState({
        name: '',
        employeeId: '',
        phoneNumber: '',
        gender: '',
        priority: 50,  // Default value for priority bar
        complaint: '',
        file: null,
      });
    
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
    
        setFormData({
          ...formData,
          [name]: type === 'file' ? files[0] : value,  // Handle file input differently
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();  // Prevent page refresh
    
        // You can handle form submission here, like sending data to an API
        console.log('Form submitted:', formData);
    
        // Reset the form after submission
        setFormData({
          name: '',
          employeeId: '',
          phoneNumber: '',
          gender: '',
          priority: 50,
          complaint: '',
          file: null,
        });
    }

  return (
        
    <div id='ticket' className="complaint-form-container">
    <form onSubmit={handleSubmit} className="complaint-form">
      <h2>Complaint Registration Form</h2>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="employeeId">Employee ID:</label>
        <input
          type="text"
          id="employeeId"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
            required
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
            required
          />
          <label htmlFor="female">Female</label>

          <input
            type="radio"
            id="others"
            name="gender"
            value="others"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
            required
          />
          <label htmlFor="others">Others</label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="priority">Priority:</label>
        <input
          type="range"
          id="priority"
          name="priority"
          min="0"
          max="100"
          value={formData.priority}
          onChange={handleChange}
        />
        <span>{formData.priority}</span>
      </div>
      <div className='form-group'>
        <label htmlFor="title">Complaint Title</label>
        <input type="text" />
      </div>

      <div className="form-group">
        <label htmlFor="complaint">Complaint:</label>
        <textarea
          id="complaint"
          name="complaint"
          rows="4"
          value={formData.complaint}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="file">Upload File:</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  </div>

  )
}

export default Tickets