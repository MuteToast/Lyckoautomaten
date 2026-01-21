const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/lucky', (req, res) => {
  const min = 1;
  const max = 100;

  if (req.query.min) {
    min = parseInt(req.query.min);
  }

  if (req.query.max) {
    max = parseInt(req.query.max);
  }
  
  if (isNaN(min) || isNaN(max) || min >= max) {
    return res.status(400).json({
      error: 'Ogiltigt intervall. Använd t.ex ?min=10&max=500'
    });
  }

  const number = Math.floor(Math.random() * (max - min + 1)) + min;

  res.json({
    number: number,
    min: min,
    max: max,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Lyckoautomaten körs på http://localhost:${PORT}`);
});
