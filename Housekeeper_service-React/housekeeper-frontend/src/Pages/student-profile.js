import React, { useState, useEffect } from 'react';
import './StudentProfile.css';
import Navbars from './sample';

const StudentProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setPhoneNumber] = useState('');
  const [roomnumber, setRoomNumber] = useState('');
  const [displayProfile, setDisplayProfile] = useState(null);

  useEffect(() => {
    // Fetch data from the server using the email stored in session storage
    const email = sessionStorage.getItem('loggedInEmail'); // Retrieve email from session storage
    if (email) {
      fetch(`http://localhost:5000/User/all/${email}`)
        .then((response) => response.json())
        .then((data) => {
          // Update state with fetched data
          setName(data.name || '');
          setEmail(data.email || '');
          setPhoneNumber(data.number || '');
          setRoomNumber(data.roomnumber || '');
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, []);

  const submitProfile = () => {
    const profileInfo = {
      name,
      email,
      number,
      roomnumber,
    };

    // Update data on the server for the current email
    fetch(`http://localhost:5000/User/update/${email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response from the server
        console.log('Data updated successfully:', data);
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });

    const profileDisplay = (
      <div>
        <h2>Student Information:</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone Number:</strong> {number}</p>
        <p><strong>Room Number:</strong> {roomnumber}</p>
      </div>
    );

    setDisplayProfile(profileDisplay);
  };

  return (
    <div>
   
      <Navbars />
     
      <div className="boxstudent" style={{marginTop:'2px'}}>
      <div className="student-profile-container">
        <h1 className="page-title" id='stupro'>Student Profile</h1>
        <form className="profile-form">
          <label htmlFor="student-name">Name:</label>
          <input
            type="text"
            id="student-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="student-email">Email:</label>
          <input
            type="email"
            id="student-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="student-phone">Phone Number:</label>
          <input
            type="tel"
            id="student-phone"
            value={number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <label htmlFor="student-room">Room Number:</label>
          <input
            type="text"
            id="student-room"
            value={roomnumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            required
          />

          <button className="save-button" type="button" onClick={submitProfile}>
            Save
          </button>
        </form>

        <div className="profile-info" id="display-profile">
          {/* Display profile information here */}
          {displayProfile}
        </div>
      </div>

      </div>

     
    </div>
  );
};

export default StudentProfile;
