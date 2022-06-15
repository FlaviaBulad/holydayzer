import express from 'express';
import cors from 'cors';
import holidays from './holidays.js';
import holidayChecker from './holidayChecker.js';

const app = express();
app.use(cors());

app.get('/holidays', (req, res) => {
  res.send(holidays);
});

app.get('/is-today-holiday', (req, res) => {

  res.send(holidayChecker());
});

app.listen(4500);