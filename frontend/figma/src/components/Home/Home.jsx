import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar"
import "./Home.css"
import axios from "axios";
import CreativeDesigns from "./CreativeDesigns";
import OurCreations from "./OurCreations";
import Products from "./Products";

export const Home = () => {

  

  // const [data,setData]=useState([]);


  // useEffect(()=>{

  //    const fetdata=async()=>{

  //        const ans=await axios.get(`http://localhost:2000/api/getdata`)
  //        setData(ans.data)
  //    }

  //    fetdata();
  // },[])

    // console.log(data);
    
  return (
    <div>
    <div className="home">
        home page
        <CreativeDesigns/>
         {/* <OurCreations/> */}
         <Products/>
    </div> 
    </div>
  )
}
