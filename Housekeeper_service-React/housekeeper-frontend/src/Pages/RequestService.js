import React from 'react';
import Navbars from './sample';
import "./RequestService.css";

const RequestService = () => {
  function click() {
    const userEmail = sessionStorage.getItem('loggedInEmail');
    if (userEmail) {
      fetch('http://localhost:5000/movedata', {
        method: 'POST', // Change the method accordingly
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }), // Send the email data
      })
        .then((response) => {
          if (response.ok) {
            alert('Request Service has sent');
            // Additional logic if needed upon successful data transfer
          } else {
            alert('Error sending Request Service');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error sending Request Service');
        });
    } else {
      alert('User email not found in sessionStorage');
    }
  }

  return (
    <div>
      <Navbars />
     
      <div className="box1">
        <button
          className="btn btn-primary my-2"
        
          id="btn1"
          onClick={click}
          type="submit"
          style={{ backgroundColor: 'blue', width: '135px' }}
        >
          Request
        </button>
        <div id='emoji'>
          <img src="https://www.freeiconspng.com/thumbs/click-png/black-hands-mouse-cursor-click-png-32.png" height={'300px'} alt="" srcset="" />
          <h2>For sending the room Cleaning Request Click on this button
            Your admin will get your request with your information</h2>
        </div>

      </div>
      
    </div>
  );
};

export default RequestService;
