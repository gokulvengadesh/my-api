const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json()); // ✅ To handle JSON POST bodies

const users = [
  { id: 1, name: 'gokul', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 28 }
];

// GET users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// ✅ POST new user
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser); // Return what was added
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
