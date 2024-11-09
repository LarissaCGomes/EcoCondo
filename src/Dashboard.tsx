import React from 'react';
import Graph from './components/Graph';
import ResidentsCard from './components/ResidentsCard';
import EquipmentSuggestionCard from './components/EquipmentSuggestionCard';
import SavingsExpectationCard from './components/SavingsExpectationCard';

const Dashboard: React.FC = () => (
  <div className="dashboard">
    <h1>Dashboard</h1>
    <Graph />
    <div className="card-container">
      <ResidentsCard />
      <EquipmentSuggestionCard />
      <SavingsExpectationCard />
    </div>
  </div>
);

export default Dashboard;
