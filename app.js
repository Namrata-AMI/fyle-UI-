const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));


app.get("/app",(req,res)=>{
    res.render("index.ejs");
});

app.post("/app",(req,res)=>{
    const {email,firstName,LastName} = req.body;
    console.log(req.body);
});


app.listen(8080,()=>{
    console.log("server is listening to port 8080");
})

