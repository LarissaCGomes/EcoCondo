import React from 'react';
import "./css-files/Graph.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '5k', Mar: 10, Sep: 20 },
  { name: '10k', Mar: 90, Sep: 40 },
  { name: '20k', Mar: 10, Sep: 60 },
  { name: '80k', Mar: 100, Sep: 60 },
  { name: '100k', Mar: 50, Sep: 60 },
];

const Graph: React.FC = () => (
  <div className="graph">
    <h3>Gráfico Comparativo</h3>
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Mar" stackId="1" stroke="#FF6B6B" fill="#FF6B6B" />
        <Area type="monotone" dataKey="Sep" stackId="1" stroke="#805AD5" fill="#805AD5" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default Graph;
