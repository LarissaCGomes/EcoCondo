import React from 'react';
import "../components/css-files/Sidebar.css"

const Sidebar: React.FC = () => (
  <div className="sidebar">
    <h2>Eco<span>Condo.</span></h2>
    <ul>
      <li>Dashboard</li>
      <li>Tarefas</li>
      <li>Moradores</li>
      <li>To-Do</li>
    </ul>
    <div className="settings">
      <p>Settings</p>
      <p>Logout</p>
    </div>
  </div>
);

export default Sidebar;
