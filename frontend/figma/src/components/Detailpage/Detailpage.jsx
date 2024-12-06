import { useParams } from "react-router-dom";
import "./Detailpage.css"
import { Relatedpage } from "./Relatedpage";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const Detailpage = () => {

     const {id,index} = useParams();
     console.log(id,index);  
     

     // get the data by id from the product data

     const [data,setData]=useState([]);

     useEffect(()=>{

         const fetchdata=async()=>{

            const result=await axios.get(`http://localhost:2000/api/getproduct`);
            setData(result.data.item);
         }

         fetchdata();
     },[])
     

      
     if (data.length === 0) {
        return <div>Loading...</div>; 
      }
    
      if (!data[index]) {
        return <div>Product not found!</div>;
      }
    
      const { name, price,count,img,totalprice } = data[index]; 

      console.log(name,price,count,img,totalprice);
      
     
     const handleaddproductintocart=()=>{
          

           const adddata=async()=>{

                await axios.post(`http://localhost:2000/api/add`,data[index])
                toast.success("product added ")
           }

           adddata();
     }  
      
      

    
  return (
       <div>
         <section className="product-detail">
           <h1>product id:{id}</h1>
           <h1>index:{index}</h1>
       <div className="product-images">
      <img
         src={`/${img}`}
        alt="Customized Journal"
        className="main-image"
      />
      <div className="thumbnail-images">
        {/* <img src="/img5.webp" alt="Thumbnail 1" /> */}
      </div>
    </div>
    <div className="product-info">
    <h2>{name}</h2>
      <p className="price">{price} Rs</p>
      <button className="add-to-cart"
          onClick={handleaddproductintocart}
      >Add to Cart</button>
      <p className="description">
        This customizable journal is perfect for your notes, ideas, and
        creative thoughts.
      </p>
    </div>
  </section>

       <Relatedpage/>
       </div>
  )
}
