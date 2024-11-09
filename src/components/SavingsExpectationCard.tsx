import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./css-files/SavingsExpectationCard.css"

const data = [
  { year: '2015', value: 20 },
  { year: '2016', value: 35 },
  { year: '2017', value: 50 },
  { year: '2018', value: 65 },
  { year: '2019', value: 80 },
];

const SavingsExpectationCard: React.FC = () => (
  <div className="card">
    <h4>Expectativa de Economia</h4>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#3182CE" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default SavingsExpectationCard;
