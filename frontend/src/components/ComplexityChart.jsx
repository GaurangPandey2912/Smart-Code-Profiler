import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

function ComplexityChart({ complexity }) {
  const data = [
    { name: 'Functions', value: complexity.function_count },
    { name: 'Loops', value: complexity.loop_count },
    { name: 'Ifs', value: complexity.if_count },
  ];
  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="text-xl font-bold">Code Complexity</h2>
      <BarChart width={400} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default ComplexityChart;
