const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/routes');

const app = express();
const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb+srv://Shweta:IVjGS8PCEVfEDT4e@cluster0.0icw1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((arr) => console.log("error connecting to mongodb")); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});



