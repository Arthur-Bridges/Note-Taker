const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

let notes = [];
const app = express();

app.use(express.static('public'));

//retrieve
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

//save/update
app.post('/api/notes', (req, res) => {
    const updateNote = req.body;

    notes.push(updateNote);
    res.json(updateNote);
});

//delete
//look into the delete method more
app.delete('', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`App listenening at: `);
});