const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('New Api running')
});

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    id = req.params.id;
    const selectedCourse = courses.find(c => c._id === id);
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('Api is runniung',port)
})