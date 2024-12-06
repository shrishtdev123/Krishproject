import { useState } from "react";
import "./Clender.css"
import { toast } from "react-toastify";
import axios from "axios";

export const Clender = () => {
     
  const [formData, setFormData] = useState({
    img: 'img2.jpg',
    name: 'laptop',
    price: 1300,
    totalprice: 1300,
    count: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handleclick
   const handleclick=(e)=>{
       e.preventDefault();
       
       console.log(formData);
       
      const senddata=async()=>{

           await axios.post(`http://localhost:2000/api/addproduct`,formData);
            toast.success("product added successfully")
           
      }

      senddata();
       
   }
  return (
    <div className="form-container">
    <h2>Product Input Form</h2>
    <form >
      <div className="form-group">
        <label htmlFor="img">Image:</label>
        <input
          type="text"
          id="img"
          name="img"
          value={formData.img}
          onChange={handleChange}
          
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
         
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          
        />
      </div>

      <div className="form-group">
        <label htmlFor="totalprice">Total Price:</label>
        <input
          type="number"
          id="totalprice"
          name="totalprice"
          value={formData.totalprice}
          onChange={handleChange}
         
        />
      </div>

      <div className="form-group">
        <label htmlFor="count">Count:</label>
        <input
          type="number"
          id="count"
          name="count"
          value={formData.count}
          onChange={handleChange}
         
        />
      </div>

      <button type="submit" className="submit-btn"
        onClick={handleclick}
      >
        Submit
      </button>
    </form>
  </div>
  )
}
