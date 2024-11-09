import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import "./css-files/ResidentsCard.css"

// Pie chart data
const data = [
  { name: 'Todos', value: 4249 },
  { name: 'Condomínio', value: 1420 },
];

const COLORS = ['#FF6B6B', '#805AD5'];

const ResidentsCard: React.FC = () => (
  <div className="card">
    <h4>Moradores</h4>
    <p>4,249 <span>Todos</span></p>
    <p>1,420 <span>Condomínio</span></p>
    
    <div className="pie-chart-container">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  </div>
);

export default ResidentsCard;
