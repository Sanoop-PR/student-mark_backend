const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  examinationDate: {
    type: String,
    required: true,
  },
  examinationTime: {
    type: String,
    required: true,
  },
  marksObtained: {
    type: Number,
    required: true,
  },
  maxMarks: {
    type: Number,
    required: true,
  },
});

const Marks = mongoose.model("Marks", marksSchema);

module.exports = Marks;
