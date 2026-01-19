import React from 'react';
import useFetch from './useFetch'; // Importing our custom hook
import './App.css'; // Importing the CSS

const App = () => {
  // Using the hook with a dummy API
  const { data, loading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div className="container">
      <header>
        <h1>User Directory</h1>
        <button className="refetch-btn" onClick={refetch}>
          Refetch Data
        </button>
      </header>

      {/* 1. Loading State */}
      {loading && <div className="loading">Loading...</div>}

      {/* 2. Error State */}
      {error && <div className="error">Error: {error}</div>}

      {/* 3. Data State */}
      {data && (
        <div className="grid">
          {data.map((user) => (
            <div key={user.id} className="card">
              <h3>{user.name}</h3>
              <p>📧 {user.email}</p>
              <p>🏢 {user.company.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;