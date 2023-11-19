import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './log.css';
function generateRandomId() {
  // Generate a random string of 8 characters
  return Math.random().toString(36).substring(2, 10);
}
function generateRandomLevel() {
  const levels = ['info', 'warning', 'error'];
  const randomIndex = Math.floor(Math.random() * levels.length);
  return levels[randomIndex];
}

function generateRandomMessage() {
  const messages = [
    'User logged in',
    'Data processed successfully',
    'Error occurred: Out of memory',
    'Application started',
    'Request received from IP 192.168.0.1',
    'File uploaded successfully',
    '404 Not Found',
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}


function generateRandomTimestamp() {
  // Generate a random timestamp within the last 24 hours
  const currentTimestamp = Date.now();
  const randomOffset = Math.floor(Math.random() * 24 * 60 * 60 * 1000);
  return new Date(currentTimestamp - randomOffset).toISOString();
}

function LogTable({ logs, search }) {
  // Function to format logs with highlighted search term
  const highlightSearchTerm = (text, term) => {
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  };

  // Function to display metadata object as a string
  const displayMetadata = (metadata) => {
    if (metadata && typeof metadata === 'object') {
      return JSON.stringify(metadata);
    }
    return metadata;
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {logs.length > 0 &&
              Object.keys(logs[0]).map((field, index) => (
                <th key={index}>{field}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              {Object.entries(log).map(([key, value], index) => (
                <td
                  key={index}
                  dangerouslySetInnerHTML={{ __html: key === 'metadata' ? highlightSearchTerm(displayMetadata(value.parentResourceId), search) : highlightSearchTerm(String(value), search) }}
                />
                
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [search, setSearch] = useState('');
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    // Send a POST request to ingest data when the component mounts
    const initialData = {
      level: generateRandomLevel(),
      message: generateRandomMessage(),
      resourceId: "server-"+generateRandomId(),
      timestamp: generateRandomTimestamp(),
      traceId: generateRandomId(),
      spanId: generateRandomId(),
      commit: 'abcdefg',
      metadata: {
        parentResourceId: "server-"+generateRandomId()
      }
    };

    axios.post('http://localhost:3000/log', initialData)
      .then(() => console.log('Initial data ingested successfully'))
      .catch((error) => console.error('Error ingesting initial data:', error));
  }, []); // Empty dependency array means this effect runs once when the component mounts


  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        // If there's a search term, fetch logs based on the search term
        if (search.trim() !== '') {
          response = await axios.get(`http://localhost:3000/logs?search=${search}`);
          setLogs(response.data);

          if (response.data.length === 0) throw new Error('No search result found');
        } else {
          // Otherwise, fetch all logs
          response = await axios.get('http://localhost:3000/logs');
        }

        setLogs(response.data);
        setError('');
      } catch (err) {
        setLogs([]);
        setError('No search result found');
      }
    };

    fetchData();
  }, [search]); // Include search in the dependency array to trigger the effect on search changes

  return (
    <div className="log-query-interface">
      <h1>Log Query Interface</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="enter a keyword"/>

      {error && <p>{error}</p>}

      <LogTable logs={logs} search={search} />
    </div>
  );
}

export default App;
