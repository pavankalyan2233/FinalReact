import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './Adminregistration.css'
import Studentnav from './Studentnav';






const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const serverURI = 'http://localhost:5000/Admin/create'; // Replace 'your_server_endpoint' with your actual server endpoint

const onSubmit = async (data) => {
  try {
    // Make a POST request to the server endpoint with form data
    const response = await fetch(serverURI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Encode form data as JSON
    });

    if (response.ok) {
      // If the response is successful, show the success modal
      setShowModal(true);
      console.log('Form submitted:', data);
    } else {
      // If there's an error in the response, handle it accordingly
      // For instance, you can show an error message or handle it in a different way
      console.error('Error occurred while submitting the form:', response.statusText);
      // Optionally, you can also handle error states and display an error modal
    }
  } catch (error) {
    console.error('Error occurred while submitting the form:', error.message);
    // Handle exceptions that might occur during the fetch operation
    // For instance, network errors, JSON parsing errors, etc.
    // You can display an error modal or take appropriate action based on the error
  }
};

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/Adminlogin');
  };

return (
  <div className="Adminregistration">
     <Studentnav/>
      <div className='Admincontainer'>
        <div className='Admincard'>
          <form className='formgroup2' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1>Registration</h1>
            </div>
            <div>
              <label>Name</label>
              <input className='jsregister'
                placeholder="Enter person name"
                {...register('name', { required: true })}
              />
              <error>
                {errors.name?.type === 'required' && '  Name is required'}
              </error>
            </div>
            <div>
              <label>Email</label>
              <input className='jsregister'
                placeholder="Enter primary email"
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
              />
              <error>
                {errors.email?.type === 'required' && '  Email is required'}
                {errors.email?.type === 'pattern' &&
                  'Entered email is in the wrong format'}
              </error>
            </div>
            <div>
              <label>Phone Number</label>
              <input className='jsregister'
                type="number"
                {...register('number', {
                  minLength: 10,
                  maxLength: 12,
                })}
              />
              <error>
                {errors.number?.type === 'minLength' &&
                  'Entered number is less than 10 digits'}
                {errors.number?.type === 'maxLength' &&
                  'Entered number is more than 12 digits'}
              </error>
            </div>

            <div>
              <label>Create Password</label>
              <input className='jsregister'
                placeholder="Enter password"
                {...register('password', {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                })}
              />
              <error>
                {errors.password?.type === 'minLength' &&
                  'Entered password is less than 5 characters'}
                {errors.password?.type === 'maxLength' &&
                  'Entered password is more than 20 characters'}
              </error>
            </div>
            <center>
              <p>
                Already Have an Account &nbsp; &nbsp;
                <Link to="/Adminlogin">
                  <u>Login</u>
                </Link>
                <br></br>
              </p>
            </center>
            <div>
              <input className="button1" type="submit" />
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="lasttext1">
        <center>
          <div className="text2">
          <h2>
            Your are successfully registered! Click Ok to login<br></br>
            <button onClick={handleModalClose}>OK</button>
          </h2>
          </div>
        </center>
        
      </div>
      )}
    </div>
  );
};
export default function Adminregistration() {
  return (
    <div>
     
      <Form />
    </div>
  );
}