// SERVER------------------------------------------------------------------
// importing dependancies
const express = require("express")
const bodyParser = require("body-parser")

// Initializing express application
let app = express();

// instructing the express app
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// instructing the server on what to do when root route is requested
app.get('/', function(req,res){
  res.render('home');
})

app.get('/about',function(req,res){
  res.render('about')
})

app.get('/skills', function(req,res){
  res.render('skills')
})

//Running the server
app.listen(process.env.PORT || 3000, function(){
  console.log("You are connected to the server");
})
