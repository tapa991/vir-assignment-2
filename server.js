const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, from Patrick!!!');
});

app.listen(PORT, () => {
  console.log(`The application is now running on http://localhost:${PORT}`);
});