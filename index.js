const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Course Api is running')
});

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse)
})
app.get('/checkout/:id', (req, res) => {
    id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('Api is runniung',port)
})