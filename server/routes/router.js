const express = require('express');
const router = express.Router();
const userData = require("../models/userDataSchema");

router.post("/add-data",async (req,res)=>{
    // console.log(req.body);
    const {name,username,age,dob} = req.body;
    if(!name || !username || !age || !dob) {
        res.status(404).json("Kindly fill all the entries of the form.");
    }
    
    try {
        const prevUser = await userData.findOne({username:username});
        if(prevUser){
            res.status(404).json("User already exists. Try another username!");
        }
        else{
            const addUser = new userData({
                name,username,age,dob
            })

            await addUser.save();
            res.status(201).json(addUser);
            // console.log(addUser);
        }

    } catch (error) {
        res.status(404).json(error);
    }
})

router.post("/update-user",async (req,res)=>{
    // console.log(req.body);
    const {name,username,age,dob} = req.body;
    if(!name || !username || !age || !dob) {
        res.status(404).json("Kindly fill all the entries of the form.");
    }
    
    try {
        const prevUser = await userData.findOne({username:username});
        if(!prevUser){
            res.status(404).json("User does not exist. Please create a user!");
        }
        else{
            const User = new userData({
                name,username,age,dob
            })

            await userData.update({username:username},{$set:{name:name,age:age,dob:dob}});
            res.status(201).json("User Data was updated");
            // console.log(addUser);
        }

    } catch (error) {
        res.status(404).json("There was an error, please try again");
    }
})

router.get("/list-users",async (req,res)=>{
    try{
        const users =await userData.find();
        // console.log(users);
        res.status(201).json(users);
    }catch(error){
        console.log(error);
        res.status(404).json(error);
    }
})

router.post("/delete-user",async (req,res)=>{
    // console.log(req.body);
    const {username} = req.body;
    if(!username) {
        res.status(404).json("Kindly enter the username of the entry to be deleted.");
    }
    
    try {
        const user = await userData.findOne({"username":username});
        if(user){
            await userData.deleteOne(user);
            res.status(200).json("User entry deleted!");
        }
        else{
            res.status(404).json("User does not exist");
            // console.log(addUser);
        }

    } catch (error) {
        res.status(404).json(error);
    }
})

module.exports = router;