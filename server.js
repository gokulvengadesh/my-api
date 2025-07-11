const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

const users = [
  { image: 'https://via.placeholder.com/100', id: 1, name: 'gokul', age: 25 },
  { image: 'https://via.placeholder.com/100', id: 2, name: 'Bob', age: 30 },
  { image: 'https://via.placeholder.com/100', id: 3, name: 'Charlie', age: 28 }
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
