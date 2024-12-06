require('dotenv').config()
const express=require("express");
const router = require('./routes/CartRoutes');
const ConnectDb = require('./db/db');
const cors=require("cors");
const productrouter = require('./routes/productRoute');
const cheakoutrouter = require('./routes/CheakoutRoutes');
const UniqueRouter = require('./routes/uniqueRoutes');
const app=express();
 app.use(cors());
 app.use(express.json())
const port=process.env.port||2000
ConnectDb()

app.use("/api",router);
app.use("/api",productrouter)
app.use("/api",cheakoutrouter)
app.use("/api",UniqueRouter)

app.listen(port,()=>{
    console.log(`server is running at port${2000}`);
})