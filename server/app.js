const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require("./routes/router");

const url = "mongodb+srv://yash_seth:easytoremember@cluster0.egbzd.mongodb.net/userData?retryWrites=true&w=majority";

require("./db/conn.js");
const userData = require("./models/userDataSchema");
const port = 8003;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});