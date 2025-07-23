const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware to parse JSON body
app.use(express.json());

// In-memory users array
let users = [
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

  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }

  const id = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = { id, name, age };
  users.push(newUser);

  res.status(201).json(newUser);
});

// ✅ DELETE user using ID and name from body
app.delete('/api/users', (req, res) => {
  const { id, name } = req.body;

  if (typeof id !== 'number' || typeof name !== 'string') {
    return res.status(400).json({ error: 'Both id (number) and name (string) are required in the body' });
  }

  const index = users.findIndex(user => user.id === id && user.name === name);

  if (index === -1) {
    return res.status(404).json({ error: 'User not found or name does not match' });
  }

  const deletedUser = users.splice(index, 1)[0];
  res.json({ message: 'User deleted by ID and name', user: deletedUser });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
