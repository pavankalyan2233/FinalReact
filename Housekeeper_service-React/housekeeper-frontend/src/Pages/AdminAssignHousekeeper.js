import React, { useState, useEffect } from "react";
import "./AdminAssignHousekeeper.css";
import Navbars from "./Adminpage";

const AdminAssignHousekeeper = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedHousekeeper, setSelectedHousekeeper] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");

  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/Assign/all"); // Replace YOUR_GET_URI with the actual endpoint
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAssignHousekeeper = async () => {
    try {
      validateForm();

      const newAssignment = createAssignmentObject();

      // Send data to the server
      const response = await fetch("http://localhost:5000/Assign/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAssignment),
      });

      if (!response.ok) {
        throw new Error("Failed to assign housekeeper.");
      }

      updateAssignments(newAssignment);
      clearFormFields();

      alert(`Housekeeper assigned successfully to ${newAssignment.name}`);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleDeleteAssignment = async (_id) => {
    try {
      // Send a request to delete the assignment with the given ID from the server
      const response = await fetch(
        `http://localhost:5000/Assign/delete/${_id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete assignment.");
      }

      // Update the assignments state after successful deletion
      const updatedAssignments = assignments.filter(
        (assignment) => assignment._id !== _id
      );
      setAssignments(updatedAssignments);

      alert("Assignment deleted successfully.");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const validateForm = () => {
    if (!selectedStudent || !selectedHousekeeper || !selectedRoom) {
      throw new Error("Please fill in all fields.");
    }

    const isDuplicate = assignments.some(
      (assignment) =>
        assignment.name === selectedStudent &&
        assignment.roomno === selectedRoom
    );

    if (isDuplicate) {
      throw new Error("This student is already assigned to the selected room.");
    }
  };

  const createAssignmentObject = () => ({
    id: assignments.length + 1,
    name: selectedStudent,
    roomno: selectedRoom,
    housekeeper: selectedHousekeeper,
  });

  const updateAssignments = (newAssignment) => {
    setAssignments([...assignments, newAssignment]);
  };

  const clearFormFields = () => {
    setSelectedHousekeeper("");
    setSelectedStudent("");
    setSelectedRoom("");
  };

  return (
    <div>
      <Navbars />

      <div id="adminassign">
      <div className="assign-housekeeper-container">
        <h2>Assign Housekeeper</h2>
        <div className="assign-form">
          <label>
            Student Name:
            <input
              type="text"
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
            />
          </label>
          <label>
            Room Number:
            <input
              type="text"
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
            />
          </label>
          <label>
            Housekeeper:
            <input
              type="text"
              value={selectedHousekeeper}
              onChange={(e) => setSelectedHousekeeper(e.target.value)}
            />
          </label>

          <button type="button" onClick={handleAssignHousekeeper}>
            Assign Housekeeper
          </button>
        </div>
        <div className="assignments-list">
          <h3 style={{color:'white',position:'relative',left:'290px'}}>Assignments</h3>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Room Number</th>
                <th>Housekeeper Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td>{assignment.name}</td>
                  <td>{assignment.roomno}</td>
                  <td>{assignment.housekeeper}</td>
                  <td>
                    <button
                      onClick={() => {
                        console.log("Assignment to be deleted:", assignment);
                        handleDeleteAssignment(assignment._id); // Use assignment._id here
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      </div>
      
     
    </div>
  );
};

export default AdminAssignHousekeeper;
