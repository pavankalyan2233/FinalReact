import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './Userregistration.css'
import Studentnav from './Studentnav';






const Form = () => {
  const [showModal, setShowModal] = useState(false); // Initialize showModal state
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      // Your server URI to send the data
      const serverURI = "http://localhost:5000/User/create"; // Replace with your actual URI

      // Make a POST request to the server with form data
      const response = await fetch(serverURI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the appropriate Content-Type
        },
        body: JSON.stringify(formData), // Convert form data to JSON before sending
      });

      // Check if the request was successful (status code 200-299)
      if (response.ok) {
        // Data was successfully sent
        setShowModal(true); // Show the success modal
      } else {
        // Handle errors if the request fails
        // You might want to display an error message or handle it accordingly
        console.error("Failed to send data to the server");
      }
    } catch (error) {
      // Handle any network errors or exceptions here
      console.error("Error sending data:", error.message);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/Userlogin"); // Redirect to the appropriate page using navigate
  };

  return (

    <div className="Userregistration">
              <Studentnav/>
      <div className="register">
        <div className="registercard">
          <form className="formgroup1" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1>Registration</h1>
            </div>
            <div>
              <label>Name</label>
              <input
                className="jsregister" placeholder="Enter person name" {...register("name", { required: true })}
              />
              <error>
                {errors.name?.type === "required" && "  Name is required"}
              </error>
            </div>
            <div>
              <label>Email</label>
              <input
                className="jsregister"
                placeholder="Enter primary email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
              />
              <error>
                {errors.email?.type === "required" && "  Email is required"}
                {errors.email?.type === "pattern" &&
                  "Entered email is in the wrong format"}
              </error>
            </div>
            <div>
              <label>Phone Number</label>
              <input
                className="jsregister"
                type="number"
                {...register("number", {
                  minLength: 10,
                  maxLength: 12,
                })}
              />
              <error>
                {errors.number?.type === "minLength" &&
                  "Entered number is less than 10 digits"}
                {errors.number?.type === "maxLength" &&
                  "Entered number is more than 12 digits"}
              </error>
            </div>

            <div>
              <label>Create Password</label>
              <input
                className="jsregister"
                type="password"
                placeholder="Enter password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                })}
              />
              <error>
                {errors.password?.type === "minLength" &&
                  "Entered password is less than 8 characters"}
                {errors.password?.type === "maxLength" &&
                  "Entered password is more than 20 characters"}
              </error>
            </div>

            <div>
              <label>Room Number</label>
              <input
                className="jsregister"
                type="number"
                {...register("roomnumber")}
              />
            </div>
            <center>
              <p>
                Already Have an Account &nbsp; &nbsp;
                <Link to="/JsLogin">
                  <u>Login</u>
                </Link>
                <br></br>
              </p>
            </center>
            <div>
              <input className="button1" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="lasttext">
          <center>
            <div className="text1">
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

export default function App() {
  return (
    <div>
    
      <Form />
    </div>
  );
}