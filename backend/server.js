const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Enable All CORS Requests for development
app.use(cors());

app.use(express.json()); // To parse JSON bodies

app.post('/save', (req, res) => {
  console.log('Canvas data received:', req.body.canvas);
  res.send({ message: 'Canvas saved successfully!' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
