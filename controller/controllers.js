const Marks = require('../models/markModel')

exports.home = async (req, res) => {
    try {
        const marks = await Marks.find();
        console.log(marks)
        res.status(200).json(marks);
      } catch (error) {
        console.error('Error fetching marks:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

// POST route to add marks
exports.addMark = async (req, res) => {
    try {
      const { courseName, examinationDate,examinationTime, marksObtained, maxMarks } = req.body;
  console.log(req.body)
      // Validate request body
      if (!courseName || !examinationDate ||!examinationTime|| !marksObtained || !maxMarks) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Create new marks document
      const newMarks = new Marks({
        courseName,
        examinationDate,
        examinationTime,
        marksObtained,
        maxMarks
      });
  
      // Save marks to the database
      await newMarks.save();
  
      res.status(201).json({ message: 'Marks added successfully' });
    } catch (error) {
      console.error('Error adding marks:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }