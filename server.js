const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Sample JSON route
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Gokul' },
    { id: 2, name: 'ChatGPT' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
