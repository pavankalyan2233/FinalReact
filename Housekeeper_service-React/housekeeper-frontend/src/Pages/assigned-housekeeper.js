import React, { useState, useEffect } from "react";
import Navbars from "./sample";
import './assigned-housekeeper.css';

const AssignedHousekeeper = () => {
  const [assignedHousekeepers, setAssignedHousekeepers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/Assign/all");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setAssignedHousekeepers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbars />

      <div id="assigned">
        <h1 style={{ textAlign: 'center' }}>Assigned Housekeeper to the Student</h1>

        <div className="assigned-list">
          {assignedHousekeepers.map((housekeeper) => (
            <div key={housekeeper._id} className="housekeeper-card">
              <h2>{housekeeper.housekeeper}</h2>
              <p>Assigned to: {housekeeper.name}</p>
              <p>Room Number: {housekeeper.roomno}</p>
              {/* Add more details as needed */}
             
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignedHousekeeper;
