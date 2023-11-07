const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

let notes = [];
const app = express();

app.use(express.static('public'));

//retrieve
app.get('', (req, res) => {

});

//save/update
app.post('', (req, res) => {
    const updateNote = req.body;

    notes.push(updateNote);
    res.json(updateNote);
});

//delete
app.delete('', (req, res) => {

});