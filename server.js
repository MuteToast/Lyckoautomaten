const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/lucky', (req, res) => {
  const min = 1;
  const max = 100;

    if (req.query.min) {
        const parsedMin = parseInt(req.query.min, 10);
        if (!isNaN(parsedMin)) {
        min = parsedMin;
        }
    }

    if (req.query.max) {
        const parsedMax = parseInt(req.query.max, 10);
        if (!isNaN(parsedMax)) {
        max = parsedMax;
        }
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
