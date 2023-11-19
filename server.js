const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

// Read data from data.json
const dataFilePath = path.join(__dirname, 'data.json');
let logs = loadDataFromFile(dataFilePath);

// Function to load data from a file
function loadDataFromFile(filePath) {
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error(`Error loading data from file: ${error.message}`);
    return [];
  }
}

// Log Ingestor Endpoint
app.post('/log', (req, res) => {
  const log = req.body;

  // Push the log to the array
  logs.push(log);

  // Write the updated data back to the file
  fs.writeFile(dataFilePath, JSON.stringify(logs, null, 2), (err) => {
    if (err) {
      console.error(`Error writing data to file: ${err.message}`);
      res.status(500).send('Error ingesting log');
    } else {
      res.status(200).send('Log ingested successfully');
    }
  });
});

// Query Interface Endpoint
app.get('/logs', (req, res) => {
  // Implement logic for filtering logs based on the query parameters
  const { search, level, message, resourceId, timestamp, traceId, spanId, commit, parentResourceId } = req.query;

  let filteredLogs = [...logs];

  if (search) {
    // Case-insensitive search across all fields
    filteredLogs = filteredLogs.filter(log =>
      Object.values(log).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  // Additional filters
  if (level) {
    filteredLogs = filteredLogs.filter(log => log.level === level);
  }

  if (message) {
    filteredLogs = filteredLogs.filter(log => log.message.includes(message));
  }

  if (resourceId) {
    filteredLogs = filteredLogs.filter(log => log.resourceId === resourceId);
  }

  if (timestamp) {
    filteredLogs = filteredLogs.filter(log => log.timestamp === timestamp);
  }

  if (traceId) {
    filteredLogs = filteredLogs.filter(log => log.traceId === traceId);
  }

  if (spanId) {
    filteredLogs = filteredLogs.filter(log => log.spanId === spanId);
  }

  if (commit) {
    filteredLogs = filteredLogs.filter(log => log.commit === commit);
  }

  if (parentResourceId) {
    filteredLogs = filteredLogs.filter(log => log.metadata && log.metadata.parentResourceId === parentResourceId);
  }

  res.json(filteredLogs);
});

app.listen(port, () => {
  console.log(`Log Ingestor and Query Interface running on port ${port}`);
});
