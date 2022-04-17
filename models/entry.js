const mongoose = require("mongoose");
require("dotenv").config();

const DBURL = process.env.DBURL;

mongoose.connect(DBURL)
  .then(result => {
    console.log("Connected to DB")
  })
  .catch(error => {
    console.log('error connecting to MongoDB', error.message)
  }) 

const entrySchema = new mongoose.Schema({
  name: String,
  number: String
});

entrySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model("Entry", entrySchema);