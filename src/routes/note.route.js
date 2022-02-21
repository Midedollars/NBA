const express = require("express");
const router = express.Router();

const {
    createNote,
    deleteNote,
    updateNote,
    viewAllNotes,
    fetchTitleNote,
} = require("../controllers/note.controller");

// The router paths extracted from note controller as follows:
// /newNote
// /removeNote/: _id
// /editNote/:_id
// /viewNote
// /getTitleNote/:title
router.post("/newNote", createNote);

router.delete("/removeNote/:_id", deleteNote);

router.patch("/noteUpdate/:_id", updateNote);

router.get("/allNote", viewAllNotes);

router.get("/allNote/:title", fetchTitleNote);



module.exports = router;