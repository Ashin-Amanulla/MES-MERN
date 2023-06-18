const express = require('express');
const app = express();
const PORT = 4578 //PORT
const mongoose = require('mongoose'); //mongoose for DB

//connect backend with DB
mongoose.connect("mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/")//!insert your username
.then(()=>{console.log("MongoDB connected successfully")})//*success message
.catch((err)=>{console.log("Error connecting to MongoDB " + err)});//*fail message



app.get('/',(req,res)=>{
    res.send('Server is Ashifdsfdsn')
})


app.get('/about',(req,res)=>{
    res.send('About')
})


app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});