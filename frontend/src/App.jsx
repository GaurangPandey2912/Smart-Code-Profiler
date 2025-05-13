import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Suggestions from './components/Suggestions';
import ComplexityChart from './components/ComplexityChart';

function App() {
  const [result, setResult] = useState(null);
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:5000/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="p-4 font-mono">
      <textarea className="w-full h-40 p-2 border rounded" value={code} onChange={e => setCode(e.target.value)} />
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSubmit}>Profile Code</button>
      {result && (
        <div className="mt-6">
          <Dashboard stats={result.stats} />
          <ComplexityChart complexity={result.complexity} />
          <Suggestions suggestions={result.suggestions} />
        </div>
      )}
    </div>
  );
}

export default App;
