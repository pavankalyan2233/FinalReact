import React, { useState, useEffect } from 'react';
import './AdminFeedback.css';
import Navbars from './Adminpage';
import axios from 'axios'; // Import Axios for HTTP requests

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [sortBy, setSortBy] = useState('name'); // Default sort by name
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/Feedback/all');
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors here
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  // Sorting feedbacks based on the selected option
  const sortedFeedbacks = [...feedbacks].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'roomno') {
      return a.roomno.localeCompare(b.roomno);
    }
    return 0;
  });

  const filteredFeedbacks = sortedFeedbacks.filter((feedback) =>
    feedback.name.toLowerCase().includes(filterText.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFeedbacks = filteredFeedbacks.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbars />
<div id="adminfeedback">
<div className="admin-feedback-container">
        <h2>Student Feedback</h2>

        {/* Sorting and Filtering */}
        <div>
          <label>
            Sort by:
            <select value={sortBy} onChange={handleSortChange}>
              <option value="name">Student Name</option>
              <option value="roomno">Room no</option>
            </select>
          </label>
          <label>
            Filter:
            <input
              type="text"
              value={filterText}
              onChange={handleFilterChange}
            />
          </label>
        </div>

        {/* Feedback Table */}
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Room Number</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {currentFeedbacks.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.name}</td>
                <td>{feedback.roomno}</td>
                <td>{feedback.cleaningexp}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div>
          <ul className="pagination">
            {Array.from({ length: Math.ceil(filteredFeedbacks.length / itemsPerPage) }).map(
              (_, index) => (
                <li key={index} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

</div>

     
    </div>
  );
};

export default AdminFeedback;
