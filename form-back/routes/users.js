var express = require('express');
var UserService = require('../services/userService');
var router = express.Router();

// Create
router.post('/', async function(req, res, next) {
  try {
    var utili = await UserService.create(req.body);
    return res.status(201).json(utili);
  } catch (err) {
    if( err.name === "ValidationError" ){
      return res.status(400).json({ message : err.message });
    }
    return next(err);
  }
});

// Retrieve
router.get('/:id', async (req, res, next) => {
  try{
    var userFound = await UserService.retrieve(req.params.id);
    return res.status(201).json(userFound);
  } catch( err ) {
    return res.status(400).send(err);
  }
});

// Update
router.put('/:id', async function(req, res, next) {
  var user = { username : "H" };
  try {
    await UserService.update(req.params.id, user);
    var newuser = await UserService.retrieve(req.params.id);
    return res.status(201).json(newuser);
  }  catch( err ) {
    return res.status(400).send(err);
  }
});

// Delete
router.delete('/:id', async function(req, res, next) {
  try {
    await UserService.delete(req.params.id);
    return res.status(201).send("User " + req.params.id + " was deleted successfully");
  }  catch( err ) {
    return res.status(400).send(err);
  }
});


module.exports = router;
