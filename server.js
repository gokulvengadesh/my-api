const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory users array
const users = [
  { id: 1, name: 'gokul', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 28 }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST a new user
app.post('/api/users', (req, res) => {
  const { name, age } = req.body;

  // Basic validation
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }

  // Auto-generate ID
  const id = users.length ? users[users.length - 1].id + 1 : 1;

  const newUser = { id, name, age };
  users.push(newUser);

  res.status(201).json(newUser);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
