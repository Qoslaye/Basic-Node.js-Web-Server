const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a basic server
const server = http.createServer((req, res) => {
  let filePath = '';

  switch (req.url) {
    case '/login':
        filePath = path.join(__dirname,  'login.html');
      break;
    case '/registration':
      filePath = path.join(__dirname, 'registration.html');
      break;
      
    default:
      filePath = path.join(__dirname, 'Home.html');
  }

  // Read the HTML file and serve it
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // Log the error details in the console
      console.error(`Error reading file: ${filePath}`, err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('Server Error: Could not read the file');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf8');
    }
  });
});

// Server listens on port 5000
server.listen(5000, () => {
  console.log('Server is running on port number 5000');
});
