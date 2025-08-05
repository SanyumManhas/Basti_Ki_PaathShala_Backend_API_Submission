require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI).then(()=>[
    console.log("Connected to DB")
])

const userrouter = require('./Routes/userRoutes');

app.get("/", async (req,res)=>{
    res.send("Server Started");
});

app.use(userrouter);

app.listen(port,(req,res)=>{
    console.log("Server Started at", port);
})
