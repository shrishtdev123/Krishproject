import React, { useEffect, useState } from 'react';
import "./OrderTracking.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';
const OrderTracking = () => {
    

       // first we fetch the data of cart modal 
       // than fetch the data from the cheakout modal
       // than we perform the some processing or buisness logic to get desire output
        // const {tackingid}=useParams();
       const [data,setData]=useState([]);
       const [address,setAddress]=useState([]);
       const [tractid,setTrackid]=useState(localStorage.getItem("uide"))
       
       useEffect(()=>{
           
         const fetchdata=async()=>{

              //  const result=await axios.get(`http://localhost:2000/api/getdata`);
              //  setData(result.data.data);
              //  const ans=await axios.get(`http://localhost:2000/api/getcheakoutdata`);

                // const ans=await axios.get(`http://localhost:2000/api/gettrakingdata/${tackingid}`)

                const ans=await axios.get(`http://localhost:2000/api/getuinqdatabyid/${tractid}`)


                setAddress(ans.data.ans);
         }

         fetchdata();
       },[data,address])

      //  console.log("this cheakout data",address[0]);
       
      
        console.log("this is track id",tractid);
        console.log(address?.product);
      
      if(tractid!=localStorage.getItem("uide"))
      {
         return <div>item not found</div>
      }
        
        
    return(
  <div className="order-tracking">
    <h3>Order Tracking</h3>
    <div className="order-summary">
      <p>Order ID:<span><input type="number" value={tractid} onChange={(e)=>setTrackid(e.target.value)}/>     </span></p>
      <p>Status: <span>Shipped</span></p>
      <p>Estimated Delivery:<span>2-4 days</span></p>
    </div>
    <div className="order-summary">
    {address?.product?.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={`/${item?.img}`}
                alt="Product"
                className="product-image"
              />
              <div className="product-details">
                <h3>Product Name</h3>
                <p>{item?.name}</p>
              </div>
              <div className="product-price">{item?.price} X {item.count} =</div>
              <div className="product-total">{item?.totalprice}</div>
            </div>
          ))}
    </div>
      <div>
      <p>Payment Method:{address[0]?.paymentMethod}</p>
      </div>

    <h1>Address Detail</h1>
    <div className='address'>
          <p>Name:{address[0]?.firstName}</p>
         <p>City:{address[0]?.city}</p>
         <p>Country:{address[0]?.country}</p>
         <p>Phone:{address[0]?.phone}</p>
    </div>
    <button>Change Address</button>
  </div>
);
}
export default OrderTracking;