import React, { useState } from "react";
import "./AddHousekeeper.css";
import Navbars from "./Adminpage";


const AddHousekeeper = () => {
  const [formData, setFormData] = useState({
    name: "",
    hostel: "",
    floor: "",
    rooms: "",
    complaints: "",
    time: "",
    available: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "", // Clearing the error when the input changes
    });
  };

  const validateForm = () => {
    const errors = {};

    // Add your validation logic here
    // For simplicity, let's just check if the name is not empty
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      try {
        console.log("Data to be sent:", formData);
        const response = await fetch(
          "http://localhost:5000/Housekeeper/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          // Successful response
          alert("Form submitted successfully!");
          // You might want to reset the form after a successful submission
          setFormData({
            name: "",
            hostel: "",
            floor: "",
            rooms: "",
            complaints: "",
            time: "",
            available: "", // Reset the checkbox value
          });
        } else {
          // Handle error cases for the request
          alert("Failed to submit form. Please try again later.");
        }
      } catch (error) {
        // Handle network errors
        alert("There was a network error. Please try again later.");
      }
    } else {
      // Handle form validation errors
      alert("Please fill out the required fields.");
    }
  };

  return (
    <div>
      <Navbars />
     
     <div id="addhousekeeper">
     <div className="add-housekeeper-container">
        <h2>Add Housekeeper</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <span className="error">{formErrors.name}</span>
            )}
          </label>
          <label>
            Hostel:
            <input
              type="text"
              name="hostel"
              value={formData.hostel}
              onChange={handleChange}
            />
          </label>
          <label>
            Floor:
            <input
              type="text"
              name="floor"
              value={formData.floor}
              onChange={handleChange}
            />
          </label>
          <label>
            Rooms:
            <input
              type="text"
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
            />
          </label>
          <label>
            Complaints:
            <textarea
              name="complaints"
              value={formData.complaints}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Time:
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </label>
          <label className="dropdown-label">
            Available:
            <select
              name="available"
              value={formData.available}
              onChange={handleChange}
            >
              <option value="">Select Availability</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>

     </div>
      
    </div>
  );
};

export default AddHousekeeper;
