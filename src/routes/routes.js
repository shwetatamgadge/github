
// const express = require("express");
// const router = express.Router();
// const userData = require("../Models/booksModels");
// const userController = require("../controller/booksController");

// router.post("/createBook", userController.createBooks);

// router.get("/getBooks", userController.getBooks);

// // let data = req.body;
// // let savedData =  userData.create(data);
// // res.send({ user: savedData });

// module.exports = router;

const express = require("express");
const router = express.Router();
const bookModel= require("../Models/booksModels");
const authormodel = require("../model/authormodel");
const allController=require("../controller.allcontroller");

router.post("/createauthor", allController.createuthor);

// router.post("/createbook", allController.createbook);
module.exports = router;
// let data = req.body;
// let savedData =  userData.create(data);
// res.send({ user: savedData });

// module.exports = router;
