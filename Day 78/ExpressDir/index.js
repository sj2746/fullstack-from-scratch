const express=require("express");
const app=express();

let port=8080;

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

app.use((req,res)=>{
    console.log("Request Recived");
    res.send("<h1> This is heading <h1>");
}
);