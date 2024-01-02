import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navbars = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement logout logic here
    handleClose();
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarMenu}>
        <li style={styles.navbarItem}>
          <Link to="/student-profile" style={styles.navLink}>
            Student Profile
          </Link>
        </li>
        <li style={styles.navbarItem}>
          <Link to="/RequestService" style={styles.navLink}>
            Request Service
          </Link>
        </li>
        <li style={styles.navbarItem}>
          <Link to="/assigned-housekeeper" style={styles.navLink}>
            Assigned Housekeeper
          </Link>
        </li>
        <li style={styles.navbarItem}>
          <Link to="/housekeeper-details" style={styles.navLink}>
            Housekeeper Details
          </Link>
        </li>
        <li style={styles.navbarItem}>
          <Link to="/service-feedback" style={styles.navLink}>
            Service Feedback
          </Link>
        </li>
        <li style={styles.navbarItem}>
          <Button
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleClick}
            startIcon={<AccountCircleIcon />}
            style={styles.profileButton}
          >
            Profile
          </Button>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout} style={styles.menuItem}>
              <ExitToAppIcon />
              
              <Link to="/">Logout</Link>
              
            </MenuItem>
          </Menu>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#2c3e50',
    padding: '10px',
  },
  navbarMenu: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarItem: {
    margin: '0 15px',
  },
  navLink: {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  },
  navLinkHover: {
    color: '#3498db',
  },
  profileButton: {
    color: '#ecf0f1',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  },
  profileButtonHover: {
    color: '#3498db',
  },
  menuItem: {
    color: '#2c3e50',
  },
};

export default Navbars;
