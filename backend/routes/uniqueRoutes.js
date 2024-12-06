const express=require("express");
const unique = require("../controller/unique_controller");

const UniqueRouter=express.Router();

UniqueRouter.post("/adduinqdata",unique.Adduniquedata);
UniqueRouter.get("/getuinqdata",unique.Getuniquedata);
UniqueRouter.get("/getuinqdatabyid/:id",unique.Getuniquedatabyid);
module.exports=UniqueRouter;
