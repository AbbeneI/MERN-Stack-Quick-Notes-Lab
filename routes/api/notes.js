const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/notes');


// POST /api/users (create a user - sign up)
router.post('/notes/new', notesCtrl.createNote);
// router.post('/login', usersCtrl.login)

module.exports = router;