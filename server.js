const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/api/hello', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello from Node.js Backend!',
    time: new Date().toISOString()
  });
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Nguyen Van A', email: 'a@example.com' },
    { id: 2, name: 'Tran Thi B', email: 'b@example.com' },
    { id: 3, name: 'Le Van C', email: 'c@example.com' }
  ];
  res.json(users);
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy v2.0',
    service: 'Node.js Backend',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
