import express, { response } from 'express';
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

app.get("/holidays/:month", (req, res) => {
    const { month } = req.params;

    const monthHolidays = holidays.filter((day) => {
        return day.date.split("/")[0] === month.toString()
    });
    
    res.send(monthHolidays);
})

app.listen(4500);