const express = require("express");
const mongoose = require("mongoose");

let app = express();
mongoose.connect("mongodb://0.0.0.0:27017/", (err)=>{
    if(!err)console.log("mongodb is connected");
    
else
    console.log("error");

})




app.listen( 5000 , function(){
    console.log('server is open')
})

const empdata=new mongoose.Schema({
    name:String,
    Phone:String,
    age:Number
});
let empmodel = new mongoose.model("Employee", empdata);

let newemp = new empmodel ({
    name:"omar",
    Phone:"01116787600",
    age:"21",
}).save();
let newemp1 = new empmodel ({
    name:"youssed",
    Phone:"01289993262",
    age:"20",
}).save();
let newemp2 = new empmodel ({
    name:"abdo",
    Phone:"01201736432",
    age:"22",
}).save();








const depdata = new mongoose.Schema({
    depname : String,
    depID:Number
});
let depmodel = new mongoose.model("Department",depdata)

let newdep = new depmodel({
    depname : 'government',
    depID : '10'
}).save();
let newdep1 = new depmodel({
    depname : 'school',
    depID : '11'
}).save();

app.get('/employee', async(req,res)=>{
    let allemps = await empmodel.find()
    res.status(200)
    console.log(allemps.length)
    res.json(allemps)
});
app.get('/',(req,res)=>{
    res.status(200).json("hello world !")
});

app.get('/department',async (req,res)=>{
    let alldeps = await depmodel.find()
    res.status(200),
    console.log(alldeps.length),
    res.json(alldeps)
});