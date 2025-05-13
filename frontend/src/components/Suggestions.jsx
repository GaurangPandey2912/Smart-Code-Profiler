import React from 'react';

function Suggestions({ suggestions }) {
  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="text-xl font-bold">Suggestions</h2>
      <ul className="list-disc list-inside">
        {suggestions.map((s, idx) => <li key={idx}>{s}</li>)}
      </ul>
    </div>
  );
}

export default Suggestions;
