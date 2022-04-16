// const userData = require("../Models/booksModels.js");

// const createBooks = async function (req, res) {
//   let data = req.body;
//   let savedData = await userData.create(data);
//   res.send({ user: savedData });
// };
// const getBooks = async function (req, res) {
//   let allUser = await userData.find();
//   res.send({ data: allUser });
// };
let data = req.body;
  let savedData = await userData.create(data);
  res.send({ user: savedData });
};
const getBooks=async function(req,res){
    let allUser = awaituserdata.find({"price.indianPrice":{$in:["Rs 100","Rs 600"]},
});
const Booklist = async function (req, res) {
      let allUser = await userData.find().select({bookname:1, authorname:1,_id:0});
      res.send({ data: allUser });
    };
// module.exports.createBooks = createBooks;
module.exports.getBooks = Booklist;
module.exports.getBooks = getBooks;
module.exports.createBooks = createBooks;
// const getBooks = async function (req, res) {
//   let allUser = await userData.find();
//   res.send({ data: allUser });
// };
