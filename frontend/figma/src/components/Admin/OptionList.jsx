
import { FaListOl, FaList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export const OptionList = ({logo,title}) => {
      const nevigate=useNavigate();

     
     const handlediv=(x)=>{
          console.log(x);

          if(x==="OrderList")
          {
              nevigate("/orderlist");
          }
          else if(x==="DetailList")
          {
            nevigate("/detaillist")
          }
          else if(x==="Custmoner")
          {
             nevigate("/customer")
          }
          else if(x==="Anaylitic")
          {
             nevigate("/anaylitic")
          }
          else if(x==="Review")
          {
             nevigate("/review")
          }
          else if(x==="Wallet")
          {
             nevigate("/wallet")
          }
          else if(x==="Chate")
          {
             nevigate("/chat")
          }
          else if(x==="Addproduct")
          {
             nevigate("/clender")
          }
          
           
     }
  return (
    
         <div className='optionlist'>
          <div className="alloption"
               onClick={()=>handlediv(title)}
          >
          <div>{logo}</div>
          <div>{title}</div>
          </div>
          </div>
  )
}
