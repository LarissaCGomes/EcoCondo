import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './Dashboard';
import './App.css';

const App: React.FC = () => (
  <div className="app">
    <Sidebar />
    <div className="main-content">
      <Navbar />
      <Dashboard />
    </div>
  </div>
);

export default App;
