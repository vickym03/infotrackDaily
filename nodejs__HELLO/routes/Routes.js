module.exports = (app) => {
  const notes = require("../controllers/note.controllers.js");

  //CREAT DATA
  app.post("/notes", notes.create);

  //RETRIVE DATA
  app.post("/notes", notes.findAll);

  //RETRIVE DATA IN SINGLE ID
  app.post("/notes", notes.findOne);

  //UPDATE DATA
  app.post("/notes", notes.update);

  //DELETE DATA
  app.post("/notes", notes.delete);
};
