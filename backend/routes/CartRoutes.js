const express=require("express");
const obj = require("../controller/cart_controller");
const router=express.Router();

router.post("/add",obj.adddata)
router.delete("/remove/:id",obj.removedata)
router.put("/update/:id",obj.update)
router.get("/getdata",obj.getdata)




module.exports=router;