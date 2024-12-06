
import { useEffect, useState } from "react";
import "./ShoppingCart.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { useNavigate } from "react-router-dom";
const ShoppingCart = () => {
 
     const [count,setCount]=useState(1);
      const [data,setData]=useState([]);

      const nav=useNavigate();
      useEffect(()=>{

         const fetdata=async()=>{

             const ans=await axios.get(`http://localhost:2000/api/getdata`)
             setData(ans.data.data)
         }

         fetdata();
      },[data])

  //     const [result,setRsult]=useState(
  //       [
  //         {    id:1,
  //              name:"book",
  //              price:199,
  //              total:199,
  //              qty:1
  //         },
  //         {   id:2,
  //             name:"love",
  //             price:200,
  //             total:200,
  //             qty:1
  //         },
  //         {   id:3,
  //             name:"Mobile",
  //             price:10000,
  //             total:10000,
  //             qty:1
  //         },
  //         {   id:4,
  //           name:"lapto",
  //           price:10000,
  //           total:10000,
  //           qty:1
  //       }
  // ]
  //     );

      const handledecrement=(id,index)=>{
              console.log(id,index);
              
               if(data[index].count>1)
               {
                let count=data[index].count-1;
                let total=data[index].totalprice-data[index].price;
                 console.log(count,total);
                 
                const obj={
                     count:count,
                     totalprice:total
                }
                 // console.log("cvd",newtotal,newcount);
               const changeincrement=async()=>{
                    
             
             await axios.put(`http://localhost:2000/api/update/${id}`,obj)
            }
             changeincrement();     
               }
                        
            
            
      }

      const handleincrement=(id,index)=>{
            console.log(id,index);
            // data[index].total=400;
            // spread Operator
             
              let count=data[index].count+1;
              let total=data[index].price*count;
               console.log(count,total);
               
              const obj={
                   count:count,
                   totalprice:total
              }
               // console.log("cvd",newtotal,newcount);
          const changeincrement=async()=>{
                  
           
          await axios.put(`http://localhost:2000/api/update/${id}`,obj)
          }
          changeincrement();
           
      }

      let total_price=0;

        data.map((item)=>{
             total_price+=item.totalprice;
        })

       
    
         // remove logic

      const remove=(id)=>{
          
           const removedata=async()=>{

                  await axios.delete(`http://localhost:2000/api/remove/${id}`)
                  toast.success("item removed")
           }

           removedata();
        
      }


      const handlecheakout=()=>{

           const fetchuniquedata=async()=>{
                  const obj={
                    uid:localStorage.getItem('uide'),
                    product:data
                  }
                 
                 await axios.post(`http://localhost:2000/api/adduinqdata`,obj)
           }
           fetchuniquedata();

            nav("/cheakout");
      }
      console.log("this is data of user1");
      
    
  return (
    <div className="shopping-cart">
      
      <header className="cart-header">
        <span>&larr; Continue Shopping</span>
        <h1>Shopping Cart</h1>
      </header>

      <div className="cart-body">
        <div className="cart-items">
          {data.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.img}
                alt="Product"
                className="product-image"
              />
              <div className="product-details">
                <h3>Product Name</h3>
                <p>{item.name}</p>
              </div>
              <div className="product-price">{item.price}</div>
              <div className="product-qty">
                 <button onClick={()=>handledecrement(item._id,index)}>-</button> 
                  <input type="number" value={item.count} readOnly />
                <button onClick={()=>handleincrement(item._id,index)}>+</button>
              </div>
              <div className="product-total">{item.totalprice}</div>
              <button className="delete-btn"
                   onClick={()=>remove(item._id)}
              >&times;</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Do you have a voucher? (Optional)</h3>
          <div className="voucher-section">
            <input type="text" placeholder="Enter the code" />
            <button>Redeem</button>
          </div>
          <div className="summary-details">
            <p>Subtotal <span>{total_price} Rps</span></p>
            <p>Shipping <span>10.00 Rps</span></p>
            <p>Total <span>{total_price+10} Rps</span></p>
          </div>
          <button className="checkout-btn"
             onClick={handlecheakout}
          >
          Safe to checkout
          </button>
        </div>
      </div>

      <div className="recently-viewed">
        <h2>Recently Viewed Products</h2>
        <div className="viewed-products">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={`https://via.placeholder.com/100`}
              alt="Recently viewed"
              className="viewed-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
   