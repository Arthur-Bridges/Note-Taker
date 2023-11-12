//Handles
import express from 'express';
import path from 'path';
const PORT = process.env.PORT || 3006;

const app = express();
let notes = [];
//------------------------------------
//USE
app.use(express.json());
app.use(express.static('public'));

// GET/FETCH data
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// POST/UPDATE data
app.post('/api/notes', (req, res) => {
  const note = {
    id: Date.now(), 
    title: req.body.title,
    text: req.body.text
  };
  
  notes.push(note);
  res.json(note);
});

// DELETE 
app.delete('/api/notes/:id', (req, res) => {
  
    const noteId = parseInt(req.params.id);
  
    notes = notes.filter(note => note.id !== noteId);
  
    res.json({ 
    
        message: 'Deleted!!' 
    
    });

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});