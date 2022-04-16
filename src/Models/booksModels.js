// const mongoose = require("mongoose");

// const bookSchema = new mongoose.Schema({
//   authorName: String,
//   bookName: String,
//   category: {
//     type: String,
//     unique: true,
//   },
//   year: { type: Number, required: true },
// });
// module.exports = mongoose.model("User1", bookSchema);


const bookSchema = new mongoose.Schema( {
  bookName: {type:String, required:true},
  authorName: String, 
  prices: {
      indianPrice: String,
      europePrice: String,
  },
  tags: [String],
  stockAvailable: Boolean,
  year: {type: Number, default: 2021}
}, { timestamps: true });

