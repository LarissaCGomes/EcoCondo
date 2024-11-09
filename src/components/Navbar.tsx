import React, { useState } from 'react';
import './css-files/Navbar.css';

const Navbar: React.FC = () => {
  // State to control the modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="navbar">
      <input type="text" placeholder="Search" />
      <div className="navbar-right">
        {/* Notification bell icon */}
        <span className="notification-bell" onClick={toggleModal}>🔔</span>
        <span> English</span>
        <img src="profile-m.png" alt="User" />
        <span>Moni Roy | Admin</span>
      </div>

      {/* Modal for Notifications */}
      {isModalOpen && (
        <div className="notification-modal">
          <div className="modal-content">
            <h4>Notifications</h4>
            <ul>
              <li>You have a new message from John.</li>
              <li>Your energy consumption has decreased by 15% this month.</li>
              <li>Reminder: Update your password.</li>
            </ul>
            <button onClick={toggleModal} className="close-modal">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
