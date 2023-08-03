const express = require("express")
const router = express.Router();
const Setting = require("../models/settingModel")





router.get("/getallsettings", async (req, res) => {
    try {
      const settings = await Setting.find();
      console.log("line:600", settings);
      res.send(settings);
    } catch (error) {
      return res.status(400).json(error);
    }
  });
  
  router.post("/editsetting", async (req, res) => {
    try {
      const setting = await Setting.findOne({ _id: req.body._id });
      console.log("line:56", setting);
      setting.username = req.body.username;
      console.log("line:57", setting.username);
      setting.password = req.body.password;
      console.log("line:58", setting.password);      
      setting.role = req.body.role;
      console.log("line:58", setting.password);      
      // setting.roleNew = req.body.roleNew;
      // console.log("line:59", setting.password);      
      setting.fuelType = req.body.fuelType;
      setting.rentPerHour = req.body.rentPerHour;
      setting.capacity = req.body.capacity;
  
      await setting.save();
  
      res.send("Setting details updated successfully");
    } catch (error) {
      return res.status(400).json(error);
    }
  });


  // ###

module.exports = router

