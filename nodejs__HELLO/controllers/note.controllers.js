const Note = require("../model/Note.model");

//CREATE A SAVE NEW NOTE................
exports.create = (req, res) => {
  //validate the response
  if (!req.body.content) {
    return res.status(400).send({
      message: "can not be empty",
    });
  }

  //create a note
  const note = new Note({
    title: req.body.title || "untitle note",
    content: req.body.content,
  });

  //save data
  note.save().then((data) => {
    req.send(data).then((err) => {
      req.status(500).send({
        message: err.message || "error on creating the  Note",
      });
    });
  });  
};  

//RETRIVE DATA................................
exports.findAll = (req, res) => {
  Note.find()
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      req.status(500).send({
        message: err.message || "error on creating the  Note",
      });
    });
};

// SINGLE DATA FETCH......................
exports.findOne = (req, res) => {

    Note.findById(req.params.noteId)
    .then((note)=>{
        if(!note){
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            })
        }
        res.send(note);
    }).catch((err)=>{
        if(err.kind ==="objectID"){
            return res.status(404).send({
                message:"Note not found with id" + req.params.noteId
            });
        }
        return res.status(500).send({
            message:"Error reterving while data" + req.params.noteId
        })
    })
};

//UPDATE DATA

exports.update = (req, res) => {

  //validate the response
  if (!req.body.content) {
    return res.status(400).send({
      message: "can not be empty",
    });
  }


  //find note and update it with the request bidy
 Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};



// DELETE DATA

exports.delete = (req, res) => {

    Note.findByIdAndRemove(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });

};
