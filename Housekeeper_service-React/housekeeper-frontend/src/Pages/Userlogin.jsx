import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './Userlogin.css'
import Studentnav from './Studentnav';

// ... (other imports)

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/User/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Server Error");
      }

      const result = await response.json();
      if (result.message === "Login successful") {
        sessionStorage.setItem("loggedInEmail", data.email);
        setShowModal(true); // Show modal on successful login
        console.log("Login successful");
        navigate('/student-profile');
      } else {
        console.log("Login failed"); // Handle login failure
      }
    } catch (error) {
      window.alert("Invalid credentials. Please check your email and password.");
      console.error("Error:", error);
    }
  };

  const handleModalClose = () => {
    // Redirect to other page when the modal is closed
    navigate('/sample');
  };

  const handleForgotPassword = () => {
    const email = document.querySelector('input[name="email"]').value;
    sessionStorage.setItem("tempEmail", email); // Store email in sessionStorage
    navigate("/reset"); // Redirect to the reset password page
  };

  return (
    <div className='Userlogin'>
      <Studentnav />
      <form className='formgroup' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Login</h1>
        </div>

        <div>
          <label>Username</label>
          <input
            className='jsregister'
            placeholder="Enter primary email"
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <error>
            {errors.email?.type === 'required' && 'username/Email is required'}
            {errors.email?.type === 'pattern' &&
              'Entered email is in the wrong format'}
          </error>
        </div>

        <div>
          <label>Password</label>
          <div className="password-input">
            <input
              className='jsregister'
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              {...register('password', {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
        </div>
        <error>
          {errors.password?.type === 'minLength' &&
            'Entered password is less than 8 characters'}
          {errors.password?.type === 'maxLength' &&
            'Entered password is more than 20 characters'}
        </error>
        <br></br>
        <div>
          <center>
            <p>
              Not Yet Registered ? &nbsp;&nbsp;
              <a href="Userregistration">
                <u>Register</u>
              </a>
            </p>
          </center>
        </div>
        <center>
          <p>
            Reset Your Password...!&nbsp;&nbsp;
            <a href="reset" onClick={handleForgotPassword}>
              <u>Forgot Password</u>
            </a>
          </p>
        </center>
        <div>
          <center>
            <button className="button" type="submit">
              Login
            </button>
          </center>
        </div>
      </form>
      <div className="transparent-box">
        <p className='ptext'>
          <u>Note:</u>&nbsp; To reset your password, please enter your valid email above
          and click on forget password to create new password.
        </p>
      </div>

      {showModal && (
        <div className="jstext">
          <center>
            <h2>
              Your are successfully logged in!{' '}
              <button onClick={handleModalClose}>OK</button>
            </h2>
          </center>
        </div>
      )}
    </div>
  );
};

export default function Userlogin() {
  return (
    <div>
      <Form />
    </div>
  );
}
