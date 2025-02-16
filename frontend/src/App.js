import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('/api/index.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setApiData(data))
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>

        {error && (
          <div>
            <h2>Error fetching data:</h2>
            <p>{error.message}</p>
          </div>
        )}

        {apiData ? (
          <div>
            <h2>Data from API:</h2>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </div>
        ) : (
          !error && <p>Loading API data...</p>
        )}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
