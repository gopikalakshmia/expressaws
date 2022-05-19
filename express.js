let express=require("express");
let app=express();




app.get("/",(req,res)=>{
    res.send("simple express app");
})








app.listen(9090,()=>{
    console.log("server up")
})