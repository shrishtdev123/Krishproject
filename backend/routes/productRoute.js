const express=require("express");
const pro = require("../controller/product_controller");

const productrouter=express.Router();

productrouter.post("/addproduct",pro.addproduct);
productrouter.get("/getproduct",pro.getallproduct);
productrouter.get("/getproductbyid/:id",pro.getproductbyid);

module.exports=productrouter;