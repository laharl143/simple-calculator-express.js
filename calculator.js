
// commands used: 
//     $ npm install body-parser



const express = require('express');
const bodyParser = require("body-parser");    //incorporated body-parser
const app = express();
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));  //this is the code u need to write everytime u will use body-parser

app.get('/', (req, res) => {              // "/" is the home page
  res.sendFile(__dirname + "/index.html");            //res.sendFile is used if its a file ; __dirname is the current path of the file name
})

app.post("/", function(req, res) {

var num1 = Number(req.body.num1); //req = request ; body is everything we got ; num1 is the name attribute of First number in index.html
var num2 = Number(req.body.num2); //req = request ; body is everything we got ; num2 is the name attribute of Second number in index.html

var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});


///////////////////////////BMI Calculator/////////////////////////////////////////////////




app.get('/bmicalculator', (req, res) => {              // "/" is the home page
  res.sendFile(__dirname + "/bmiCalculator.html");            //res.sendFile is used if its a file ; __dirname is the current path of the file name
})

app.post("/bmicalculator", function(req, res) {

  var weight = parseFloat(req.body.weight); //parseFloat is used for a decimal number
  var height = parseFloat(req.body.height); 
  
  var result2 = (weight / (height * height));
  
      res.send("Your BMI is " + result2);
  });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
