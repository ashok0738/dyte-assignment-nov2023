<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>

<body>

    Log Query Interface Project

    This project consists of a log query interface built with React on the front end and an Express.js server on the back end. The application allows users to query and search logs based on various parameters.

    Table of Contents
    - Features
    - Prerequisites
    - Installation
    - Usage
    - Endpoints
    - Contributing
    - License

    Features
    - Ingest logs with random data on application mount.
    - Search logs based on keywords.
    - Filter logs by various parameters such as level, message, resource ID, timestamp, trace ID, span ID, commit, and parent resource ID.

    Prerequisites
    Node.js and npm should be installed on your machine.

    Installation
    1. Clone the repository:
        git clone https://github.com/ashok0738/dyte-assignment.git

    2. Navigate to the project directory:
        cd dyte-assignment

    3. Install dependencies for both the front end and back end:
        cd frontend
        npm install

        cd ../backend
        npm install

    Usage
    1. Start the Express.js server:
        cd backend
        npm start
        The server will run on http://localhost:3000.

    2. Start the React application:
        cd frontend
        npm start
        The React application will run on http://localhost:3001.

    3. Access the log query interface in your web browser.

    Endpoints
    - Log Ingestor Endpoint (POST):
        - Ingests a log entry.
        - Endpoint: http://localhost:3000/log

    - Query Interface Endpoint (GET):
        - Retrieves logs based on query parameters.
        - Endpoint: http://localhost:3000/logs
        - Query Parameters: search, level, message, resourceId, timestamp, traceId, spanId, commit, parentResourceId

    Contributing
    1. Fork the repository.
    2. Create a new branch: git checkout -b feature/new-feature.
    3. Make your changes and commit them: git commit -m 'Add new feature'.
    4. Push to the branch: git push origin feature/new-feature.
    5. Submit a pull request.

    License
    This project is licensed under the MIT License - see the LICENSE section for details.

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

</body>

</html>
