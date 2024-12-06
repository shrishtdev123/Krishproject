const express=require("express");
const cheak1 = require("../controller/cheakout_controller");

const cheakoutrouter=express.Router();

cheakoutrouter.post("/addcheakoutdata",cheak1.addcheakoutdata);
cheakoutrouter.get("/getcheakoutdata",cheak1.getcheakout);
cheakoutrouter.get("/gettrakingdata/:trackingid",cheak1.gettraking);

module.exports=cheakoutrouter;