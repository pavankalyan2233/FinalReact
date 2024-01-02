import React, { useState, useEffect } from 'react';
import './HousekeeperDetails.css'; // Import your CSS file
import Navbars from './sample'; 
import axios from 'axios';
import './HousekeeperDetails.css'

const HousekeeperDetails = () => {
  const [housekeepers, setHousekeepers] = useState([]);
  const [filteredHousekeepers, setFilteredHousekeepers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');

  useEffect(() => {
    // Fetch data from the server using the URI
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/Housekeeper/all');
        // Assuming the data structure is similar to your demo data
        const dataFromServer = response.data;

        setHousekeepers(dataFromServer);
        setFilteredHousekeepers(dataFromServer);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function to fetch data when component mounts
  }, []); // Dependency array is empty to run the effect only once

  const handleAvailabilityChange = (e) => {
    const selectedAvailability = e.target.value.toLowerCase(); // Convert selected value to lowercase
    setAvailabilityFilter(selectedAvailability);
  
    if (selectedAvailability === 'all') {
      filterHousekeepers(searchTerm, housekeepers);
    } else {
      const filtered = housekeepers.filter(
        (keeper) => keeper.available.toLowerCase() === selectedAvailability
      );
      filterHousekeepers(searchTerm, filtered);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.trim(); // Trim the search term
    setSearchTerm(term);
    filterHousekeepers(term, housekeepers);
  };

  const filterHousekeepers = (term, data) => {
    const filtered = data.filter(
      (keeper) =>
        keeper.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredHousekeepers(filtered);
  };

  const sortHousekeepers = (property) => {
    const sorted = [...filteredHousekeepers].sort((a, b) =>
      a[property] > b[property] ? 1 : -1
    );
    setFilteredHousekeepers(sorted);
  };

  return (
    <div>
      <Navbars/>

      <div className="housekeeperbox">
      <div className="housekeeper-details-container">
      <h2>Housekeeper Details</h2>
      <div className="filter-search-container">
        <label>
          Search:
          <input type="text" value={searchTerm} onChange={handleSearch} />
        </label>
        <label>
          Filter by Availability:
          <select value={availabilityFilter} onChange={handleAvailabilityChange}>
            <option value="all">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>
      <div className="housekeepers-list-container">
      <h3 style={{position:'relative', left:'120px'}}>Housekeepers</h3>
        <div className="buttons-container">
          <button onClick={() => sortHousekeepers('name')} style={{marginRight:'10px'}}>Sort by Name</button>
          <button onClick={() => sortHousekeepers('rooms')} style={{width:'200px'}}>Sort by Rooms cleaned</button>
        </div>
        <ul className="housekeepers-list">
          {filteredHousekeepers.map((keeper) => (
            <li key={keeper.id} className="housekeeper-item">
              <p>Name: {keeper.name}</p>
              <p>Hostel: {keeper.hostel}</p>
              <p>Floor: {keeper.floor}</p>
              <p>Rooms: {keeper.rooms}</p>
              <p>Complaints: {keeper.complaints}</p>
              <p>Time: {keeper.time}</p>
              <p>Available: {keeper.available}</p>
            </li>
          ))}
        </ul>
      </div>

      
    </div>

      </div>

     
     

    </div>
   
  );
};

export default HousekeeperDetails;

