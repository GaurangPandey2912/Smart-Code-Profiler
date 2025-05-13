import React from 'react';

function Dashboard({ stats }) {
  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="text-xl font-bold">Profiling Results</h2>
      <p>Execution Time: {stats.execution_time}s</p>
      <p>Peak Memory Usage: {stats.memory_usage} KB</p>
    </div>
  );
}

export default Dashboard;
