const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// to create note Schema
const noteSchema = new Schema({
    title: {
      type: String,
      maxlength : 500,
      required: true,

    },
    description: {
      type: String,
      maxlength: 500,
      required: true,
    },
    Date: { 
        type: Date, 
        default: Date.now
     },
  },
  {
    timestamps: true,
  }
  );
  
//   To convert noteSchema into a model 
module.exports = mongoose.model("Note", noteSchema);