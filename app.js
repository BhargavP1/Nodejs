const express=require("express");

const app=express();

app.get("/",(req,res)=>{

 res.send("Hello World");

})

// The server would listen on port 3000 in the docker container.

app.listen(3000,()=>{

 console.log("App is running on port 3000….");

}) 

