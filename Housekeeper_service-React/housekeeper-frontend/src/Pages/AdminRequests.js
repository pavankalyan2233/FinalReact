import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbars from "./Adminpage";
import './AdminRequests.css'; // Import the CSS file

function AdminRequests() {
  const [dataSource, setDataSource] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const apiUrl = 'http://localhost:5000/Request/all';
    axios.get(apiUrl)
      .then((response) => {
        setDataSource(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const deleteData = (id) => {
    const deleteUrl = `http://localhost:5000/Request/delete/${id}`;
    axios.delete(deleteUrl)
      .then(() => {
        setDataSource(dataSource.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  return (
    <div>
      <Navbars/>
      <div id="adminrequests">
      <div className="admin-requests-container">
        <h2>REQUEST FOR HOUSEKEEPER SERVICE</h2>
        <table className="requests-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Room Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((data) => (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>
                <td>{data.roomnumber}</td>
                <td>
                  <button className="close-button" onClick={() => deleteData(data._id)}>Close Request</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      </div>
    </div>
  );
}

export default AdminRequests;
