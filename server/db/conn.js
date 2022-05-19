const mongoose = require('mongoose');

const url = "mongodb+srv://yash_seth:easytoremember@cluster0.egbzd.mongodb.net/userData?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("DB connection successful")).catch((err)=>console.log(err.message));
