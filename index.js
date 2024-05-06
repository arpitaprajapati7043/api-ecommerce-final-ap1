const express = require('express');
const app = express();
const cors = require('cors');
const apiData = require('./db.json');

app.use(cors({
    origin: 'http://localhost:5173', // Update this with your React app's URL
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }));
const PORT = process.env.PORT || 8383;

app.get("/", (req, res) => {
    res.send('welcome !!');
});

app.get('/products', (req, res) => {
    res.send(apiData);
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON ${PORT}`);
});
