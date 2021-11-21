//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

var cont=[];
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Andheri Nagari Shamshan ke Samane. Samsoong ka number:-9021065122"
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){


  res.render("home",{content:cont});
})
app.get("/menu",function(req,res){


  res.render("menu",{content:cont});
})
app.get("/tbook",function(req,res){


  res.render("tbook",{content:cont});
})
app.get("/checkout",function(req,res){


  res.render("checkout",{content:cont});
})
app.get("/about",function(req,res){

  res.render("about",{content:aboutContent});
})
app.get("/contact",function(req,res){

  res.render("contact",{content:contactContent});
})
app.get("/compose",function(req,res){

  res.render("compose");
})

app.post("/order",function(req,res){

  const obj={
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    altphone:req.body.phone1,
    feedback:req.body.feedback

  }
  console.log(obj);
  res.redirect('/')
})

app.post("/menu",function(req,res){

  const obj={
    description:req.body.description,
    totals:req.body.total
  }
  console.log(obj);
  res.redirect('/menu');
})
app.post("/paynow",function(req,res){

  const obj={
    name:req.body.name,
		phone:req.body.phone,
    address:req.body.address,
    date:req.body.date,
    time:req.body.time,
    suggestions:req.body.suggestions
  }
  console.log(obj);
  res.redirect('/menu');
})
app.post("/compose",function(req,res){


  const obj={
    title:req.body.title,
    pbody:req.body.pbody
  };
  cont.push(obj);
  console.log(cont);
  res.redirect("/");
})


app.get("/:user",function(req,res){

  var k=req.params;
cont.find(function(e){
  var lo=_.lowerCase(e.title);
  var lo1=_.lowerCase(k.user);
  //console.log(lo);
  //console.log(k);
    if(lo==lo1)
    {
      res.render("post",{post:e});
    }
  /*  else
    {
      res.send("NOT FOUND");
    }
    */
  })
})


var server_port = process.env.YOUR_PORT || process.env.PORT || 80;

app.listen(server_port, function() {
  console.log("Server started on port 3000");
});
