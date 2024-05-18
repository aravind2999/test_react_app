const express = require("express");
var cors = require('cors');

var Quote = require('inspirational-quotes');
console.log(Quote.getQuote());

const app = express();

app.use(cors());

const getNewQuote = () => {
    return Quote.getQuote();
  };
  
  app.get("/", function(req, res) {
    const quote = getNewQuote(); // Call getNewQuote() for every request
    res.send(quote);
  });

app.get("/notes", function(req,res){
    res.send("<h1>Hello Notes</h1>");
})

let port = process.env.PORT;
if(port == null || port == ""){
    port = 3333;
}

app.listen(port, function(){
    console.log("Server started successfully" + port); 
})

