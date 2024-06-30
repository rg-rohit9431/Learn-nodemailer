const express = require('express');
const app = express();

const PORT = 3000;
const sendMail = require('./controllers/sendMail');

app.get('/', (req, res) => {
    res.send('Learn Nodemailer!');
});

app.get('/send', sendMail);


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});