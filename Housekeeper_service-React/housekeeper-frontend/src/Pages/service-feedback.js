// ServiceFeedback.js

import React, { useState } from 'react';
import './ServiceFeedback.css'; // Import your CSS file
import Navbars from './sample'; 
import './ServiceFeedback.css'


const ServiceFeedback = () => {
  const [name, setName] = useState('');
  const [roomno, setRoomno] = useState('');
  const [cleaningexp, setCleaningexp] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/Feedback/create', {
        method: 'POST', // Change the method as required (POST, PUT, etc.)
        headers: {
          'Content-Type': 'application/json', // Set the appropriate content type
        },
        body: JSON.stringify({
          name,
          roomno,
          cleaningexp,
        }),
      });
  
      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Feedback submitted successfully!');
        // You can reset the form fields after successful submission if needed
        setName('');
        setRoomno('');
        setCleaningexp('');
      } else {
        // Handle error (e.g., show an error message)
        console.error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
<div>
  <Navbars/>

  <div id="service-feedback">
  <div className="service-feedback-container">
      <h1 style={{color:'white'}}>Service Feedback</h1>
      <div className="card">
        <form>

          <div className="form-group">
            <label htmlFor="name">Student Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="roomno">Room No.:</label>
            <input
              type="number"
              id="roomno"
              value={roomno}
              onChange={(e) => setRoomno(Number(e.target.value))}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              value={cleaningexp}
              onChange={(e) => setCleaningexp(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="button" onClick={handleSubmit}>
            Submit Feedback
          </button>
        </form>
      </div>
    </div>

  </div>
  


</div>

    
  );
};

export default ServiceFeedback;
