const express = require("express")
const router = express.Router();
const User = require("../models/userModel")

router.post("/login", async(req, res) =>{

    const {username, password} = req.body

    try {
        const user = await User.findOne({username, password})
        console.log("line:103", user);
        if(user) {
            res.send(user)
        }
        else {
            return res.status(400).json(error);

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

module.exports = router