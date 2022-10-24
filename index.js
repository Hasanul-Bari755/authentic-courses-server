const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('New Api running')
});



app.listen(port, () => {
    console.log('Api is runniung',port)
})