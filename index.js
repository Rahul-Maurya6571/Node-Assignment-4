const bodyparser =require("body-parser")
const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.urlencoded())
app.use(express.json());
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get("/",(req,res)=>{
    res.send({message:'Hello World'})
})
//                 Addition
app.post("/add",(req,res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    if(isNaN(num1) || isNaN(num2)){
        return res.send({status:'failure', message:'invalid data type'})
    }
    const sum = num1 + num2;
    if(sum < -1000000 || sum > 100000){
        return res.send({status:'error',message:'Overflow'})
    }
    return res.send({status:'success', message:'the sum of given two number', sum})
})
//              Subtraction

app.post("/sub",(req,res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    if(isNaN(num1) || isNaN(num2)){
        return res.send({status:'failure', message:'invalid data type'})
    }
    const diff = num1 - num2;
    if(diff < -1000000 || diff > 100000){
        return res.send({status:'error',message:'Overflow'})
    }
    return res.send({status:'success', message:'the difference of given two number', diff})
})

//     Mltiply

app.post("/mult",(req,res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    if(isNaN(num1) || isNaN(num2)){
        return res.send({status:'failure', message:'invalid data type'})
    }
    const mul = num1 * num2;
    if(mul < -1000000 || mul > 100000){
        return res.send({status:'error',message:'Overflow'})
    }
    return res.send({status:'success', message:'the multiply of given two number', mul})
})
//    Division

app.post("/div",(req,res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    if(isNaN(num1) || isNaN(num2)){
        return res.send({status:'failure', message:'invalid data type'})
    }
    if(num2 === 0){
        return res.send({status:'error', message:'cannot divide by zero'})  
    }
    const div = num1 / num2;
    if(div < -1000000 || div > 100000){
        return res.send({status:'error',message:'Underflow'})
    }
    return res.send({status:'success', message:'the division of given two number', div})
})
app.listen(PORT,()=>{
    console.log(`Server is running on Port httt:localhost:8080`)
})
module.exports=app;