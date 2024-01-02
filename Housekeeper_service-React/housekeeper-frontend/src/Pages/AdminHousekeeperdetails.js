import React, { useState, useEffect } from 'react';
import './AdminHousekeeperDetails.css';
import Navbars from './Adminpage';
import axios from 'axios';

const AdminHousekeeperDetails = () => {
  const [housekeepers, setHousekeepers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [isAvailableFilter, setIsAvailableFilter] = useState(false);

  useEffect(() => {
    fetchHousekeepers();
  }, []); // Fetch housekeepers on component mount

  const fetchHousekeepers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/Housekeeper/all');
      setHousekeepers(response.data);
    } catch (error) {
      console.error('Error fetching housekeepers:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleAvailabilityFilterChange = () => {
    setIsAvailableFilter(!isAvailableFilter);
  };

  const handleDelete = async (hkId) => {
    try {
      if (window.confirm('Are you sure you want to delete this?')) {
        await axios.delete(`http://localhost:5000/Housekeeper/delete/${hkId}`);
        setHousekeepers(housekeepers.filter((hk) => hk._id !== hkId));
        alert('Housekeeper deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting housekeeper:', error);
    }
  };

  const filteredHousekeepers = housekeepers.filter((housekeeper) =>
    housekeeper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    housekeeper.hostel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let sortedHousekeepers = [...filteredHousekeepers];

  if (sortBy === 'availability') {
    sortedHousekeepers = sortedHousekeepers.sort((a, b) => {
      if (a.available && !b.available) {
        return -1;
      } else if (!a.available && b.available) {
        return 1;
      }
      return 0;
    });
  }

  sortedHousekeepers = isAvailableFilter
    ? sortedHousekeepers.filter((hk) => hk.available)
    : sortedHousekeepers;

  return (
    <div>
      <Navbars />

      <div id="adminhousekeeperdetails">
        <div className="admin-housekeeper-details-container">
          <h2>Housekeeper Details</h2>
          <div>
            <label>
              Search:
              <input type="text" value={searchQuery} onChange={handleSearchChange} />
            </label>
          </div>
          <div>
            <label>
              Sort by Availability:
              <select value={sortBy} onChange={handleSortChange}>
                <option value="availability">Availability</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Show only available:
              <input
                type="checkbox"
                checked={isAvailableFilter}
                onChange={handleAvailabilityFilterChange}
              />
            </label>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Hostel</th>
                <th>Floor</th>
                <th>Rooms</th>
                <th>Complaints</th>
                <th>Time</th>
                <th>Available</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {sortedHousekeepers.map((housekeeper) => (
                <tr key={housekeeper._id}>
                  <td>{housekeeper.name}</td>
                  <td>{housekeeper.hostel}</td>
                  <td>{housekeeper.floor}</td>
                  <td>{housekeeper.rooms}</td>
                  <td>{housekeeper.complaints}</td>
                  <td>{housekeeper.time}</td>
                  <td>{housekeeper.available}</td>
                  <td>
                    <button onClick={() => handleDelete(housekeeper._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHousekeeperDetails;
