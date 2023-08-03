const express = require("express")
const router = express.Router();
const User = require("../models/userModel")

router.post("/login", async(req, res) =>{

    const {username, password} = req.body

    try {
        const user = await User.findOne({username, password})
        // console.log("line:103", user);
        if(user) {
            res.send(user)
        }
        else {
            return res.status(400,).json(error);

        }
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.post("/register", async(req, res) =>{


    try {
        const newuser = new User(req.body)
        await newuser.save()
        res.send('User registered successfully')
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.get("/getallusers", async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  });

  router.post("/deleteuser", async (req, res) => {
    try {
      await User.findOneAndDelete({ _id: req.body.userid });
  
      res.send("User deleted successfully");
    } catch (error) {
      return res.status(400).json(error);
    }
  });

  // ###


  router.post("/adduser", async (req, res) => {
    try {
      const newuser = new User(req.body);
      console.log("line:59", newuser);
      await newuser.save();
      res.send("User added successfully");
    } catch (error) {
      return res.status(400).json(error);
    }
  });
  
  router.post("/edituser", async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.body._id });
      console.log("line:56", user);
      user.username = req.body.username;
      console.log("line:57", user.username);
      user.password = req.body.password;
      console.log("line:58", user.password);      
      user.role = req.body.role;
      console.log("line:58", user.password);      
      // user.roleNew = req.body.roleNew;
      // console.log("line:59", user.password);      
      user.fuelType = req.body.fuelType;
      user.rentPerHour = req.body.rentPerHour;
      user.capacity = req.body.capacity;
  
      await user.save();
  
      res.send("User details updated successfully");
    } catch (error) {
      return res.status(400).json(error);
    }
  });


  // ###

module.exports = router

