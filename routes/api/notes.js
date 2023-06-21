const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/notes');


// POST /api/users (create a user - sign up)
router.post('/', notesCtrl.createNote);

module.exports = router;