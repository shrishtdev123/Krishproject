import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

  
  const CategorySection = () => {

         const [ans,setAns]=useState([]);
         const navgat=useNavigate();
      
          useEffect(()=>{

              const fetchdata=async()=>{

                    const result=await axios.get(`http://localhost:2000/api/getproduct`);
                    setAns(result.data.item);
              }

              fetchdata();
          },[])
       console.log(ans);
       

       const handleproduct=(id,index)=>{
         console.log(id);
        navgat(`/detailpage/${id}/${index}`);
         
       }
    return (
      <section style={{ padding: '2rem' }}>
        <h2>Shop by Category</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {ans.map((category,index) => (
            <div key={category._id} style={{ textAlign: 'center' }}
                onClick={()=>handleproduct(category._id,index)}
            >
              <img src={category.img} alt={category.title} style={{ width: '150px', borderRadius: '8px' }} />
              <h3>{category.name}</h3>
              <h2>price:{category.price}</h2>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default CategorySection;