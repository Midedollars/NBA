const Note = require("../models/note.model");
const { successResMsg, errorResMsg } = require("../utils/response");
const AppError = require("../utils/appError");

const createNote = async (req, res, next) => {
  try {
    const { title, description} = req.body;
    if (!title || !description) {
      return next(new AppError("Note not found!, Please fill in the required field", 404));
    }
    const newNote = await Note.create({
      title,
      description,
    });
    return successResMsg(res, 201, {
      message: "Note is created successfully",
      newNote,
    });
  } catch (error) {
    return errorResMsg(res, 401, "Server Error");
  }
};


const deleteNote = async (req, res, next) => {
    try {
      const id = req.params;
      const removeNote = await Note.findOneAndDelete({ _id: id });
      if (!removeNote) {
        return next(new AppError("Note not found!, Please fill in the required field", 404));
      }
      return successResMsg(res, 200, {
        message: "Note is deleted successfully",
        removeNote,
      });
    } catch (error) {
      return errorResMsg(res, 401, "Server Error");
    }
  };

  const updateNote = async (req, res, next) => {
    try {
      const { _id } = req.params;
      const noteUpdate = await Note.findOneAndUpdate(
        { _id: _id },
        req.body,
        { new: true, runValidators: true }
      );
      if (!noteUpdate) {
        return next(new AppError("Note Not Found!", 404));
      }
      return successResMsg(res, 200, {
        message: "Note updated successfully",
        noteUpdate,
      });
    } catch (error) {
      return errorResMsg(res, 401, "Server Error");
    }
  };
  


const viewAllNotes = async (req, res, next) => {
  try {
    const allNote = await Note.find();
    return successResMsg(res, 200, {
      message: "All Note view successfully",
      allNote,
    });
  } catch (error) {
    return errorResMsg(res, 401, "Server Error");
  }
};


const fetchTitleNote = async (req, res, next) => {
  try {
    const { title } = req.params;

    const findNoteTitle = await Note.find({ title: title });
    // if (!findNoteTitle) {
    //   return res.status(404).json({
    //     message: "Note not Found! Fill in the required details",
    //   });
    // }
    return successResMsg(res, 200, {
      message: "All Note view successfully",
      allNote,
    });
  } catch (error) {
    return errorResMsg(res, 401, "Server Error");
  }
};
   

module.exports = {
  createNote,
  deleteNote,
  updateNote,
  viewAllNotes,
  fetchTitleNote,
};