#<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log Query Interface Project</title>
</head>

<body>

    <h1>Log Query Interface Project</h1>

    <p>
        This project consists of a log query interface built with React on the front end and an Express.js server on the back end. The application allows users to query and search logs based on various parameters.
    </p>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#endpoints">Endpoints</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="features">Features</h2>
    <ul>
        <li>Ingest logs with random data on application mount.</li>
        <li>Search logs based on keywords.</li>
        <li>Filter logs by various parameters such as level, message, resource ID, timestamp, trace ID, span ID, commit, and parent resource ID.</li>
    </ul>

    <h2 id="prerequisites">Prerequisites</h2>
    <p>Node.js and npm should be installed on your machine.</p>

    <h2 id="installation">Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre>git clone https://github.com/ashok0738/dyte-assignment.git</pre>
        </li>
        <li>Navigate to the project directory:
            <pre>cd dyte-assignment</pre>
        </li>
        <li>Install dependencies for both the front end and back end:
            <pre>cd frontend
npm install

cd ../backend
npm install</pre>
        </li>
    </ol>

    <h2 id="usage">Usage</h2>
    <ol>
        <li>Start the Express.js server:
            <pre>cd backend
npm start</pre>
            The server will run on http://localhost:3000.
        </li>
        <li>Start the React application:
            <pre>cd frontend
npm start</pre>
            The React application will run on http://localhost:3001.
        </li>
        <li>Access the log query interface in your web browser.</li>
    </ol>

    <h2 id="endpoints">Endpoints</h2>
    <ul>
        <li><strong>Log Ingestor Endpoint (POST):</strong>
            <ul>
                <li>Ingests a log entry.</li>
                <li>Endpoint: <code>http://localhost:3000/log</code></li>
            </ul>
        </li>
        <li><strong>Query Interface Endpoint (GET):</strong>
            <ul>
                <li>Retrieves logs based on query parameters.</li>
                <li>Endpoint: <code>http://localhost:3000/logs</code></li>
                <li>Query Parameters: <code>search</code>, <code>level</code>, <code>message</code>, <code>resourceId</code>, <code>timestamp</code>, <code>traceId</code>, <code>spanId</code>, <code>commit</code>, <code>parentResourceId</code></li>
            </ul>
        </li>
    </ul>

    <h2 id="contributing">Contributing</h2>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch: <code>git checkout -b feature/new-feature</code>.</li>
        <li>Make your changes and commit them: <code>git commit -m 'Add new feature'</code>.</li>
        <li>Push to the branch: <code>git push origin feature/new-feature</code>.</li>
        <li>Submit a pull request.</li>
    </ol>

    <h2 id="license">License</h2>
    <p>This project is licensed under the MIT License - see the <a href="#license-text">LICENSE</a> section for details.</p>

    <h3 id="license-text">MIT License</h3>
    <pre>
    MIT License

    Copyright (c) 2021-present dyte, Inc.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    </pre>

</body>

</html>
