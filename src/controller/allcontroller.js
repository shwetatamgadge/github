const bookmodel =required("../models/bookmodel");
const authormodel= required("../models/authormodel")

const createAuthor = async function(req,res){
    let data_author =req.body;
    let author_data =await authormodel.create(data_author);
    res.send({user: savedata});

};
const createBook= async function(req,res){
    let data_book= req.body;
    let book_data= await bookmodel.create(data_book);
    res.send({user:data});
};
const allbook =async function (req,res){
    let book_author =req.body;
    let author_written=await authormodel.find({
        author_name: "chetan bhagat"    });
        res.send({})
}
module.exports.createAuthor = createAuthor;