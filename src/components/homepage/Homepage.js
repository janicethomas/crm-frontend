import React from 'react';
import './Homepage.css';
import {Link} from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to CRM</h1>
      <div className="button-container">
        <button className="client-button">
          <img src="client_image_url" alt="Client" />
          <Link to={"/client-login/"}>
                    Client Login
                    </Link>
          
        </button>
        <button className="manager-button">
          <img src="manager_image_url" alt="Manager" />
          <Link to={"/client-login/"}>
                    Client Login
                    </Link>
        </button>
        <button className="admin-button">
          <img src="admin_image_url" alt="Admin" />
          Admin Login
        </button>
      </div>
    </div>
  );
};

export default Homepage;