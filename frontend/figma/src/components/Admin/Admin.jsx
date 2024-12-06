import { FaListOl } from 'react-icons/fa';
import './Admi.css';
import { OptionList } from './OptionList';
import { MdDashboard } from "react-icons/md";
import { AiFillCustomerService } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { MdRateReview } from "react-icons/md";
import { OrderDeatail } from '../DashboardComponent/OrderDeatail';
import { Dashboard } from '../DashboardComponent/Dashboard';
import { BrowserRouter, Link, NavLink, Route,Routes, useNavigate } from 'react-router-dom'
import { OrderList } from '../DashboardComponent/OrderList';
import { Customer } from '../DashboardComponent/Customer';
import { Anaylitic } from '../DashboardComponent/Anaylitic';
import { Review } from '../DashboardComponent/Review';
import { Wallet } from '../DashboardComponent/Wallet';
import { Chat } from '../DashboardComponent/Chat';
import { Clender } from '../DashboardComponent/Clender';
export const Admin = () => {

      const nav=useNavigate();
     const data=[
            {    id:1,
                logo:<FaListOl/>,
                title:"OrderList"
            },
            {   id:2,
                logo:"logo",
                title:"DetailList"
            },
            {    id:3,
                logo:<AiFillCustomerService/>,
                title:"Custmoner"
            },
            {   id:4,
                logo:"logo",
                title:"Anaylitic"
            },
            {   id:5,
                logo:<MdRateReview />,
                title:"Review"
            },
            {    id:7,
                logo:"logo",
                title:"Addproduct"
            },
            {    id:8,
                logo:<CiChat1/>,
                title:"Chate"
            },
            {    id:9,
                logo:<FaWallet/>,
                title:"Wallet"
            }
            

   
    ]

    const handleId = (id) => {
        console.log('Item clicked with ID:', id);
      };

      const handledashboard=()=>{
           nav("/dashboard")
      }
  return (

    <div className="container2">
       <div className="box box11">
           
           <div>Mera Besite</div>
           
           <div className='dashboard'
                 onClick={handledashboard}
           >
                 <div><MdDashboard/></div>
                 <div>DashBoard</div>
           </div>
           
         {/* her componets render here */}
          <div className='iterate_list'>
             {
                 data.map((item,index)=>(
                    <OptionList key={index} logo={item.logo} title={item.title}
                       onClick={() => handleId(item.id)}
                    />
                 ))
             }
          </div>
       </div>
       <div className="box box12">
       2
             
        {/* perform routing her  */}
         
             <Routes>
                 <Route path='/dashboard' element={<Dashboard/>}/>
                 <Route path='/orderlist' element={<OrderList/>}/>
                 <Route path='/detaillist' element={<OrderDeatail/>}/>
                 <Route path='/customer' element={<Customer/>}/>
                 <Route path='/anaylitic' element={<Anaylitic/>}/>
                 <Route path='/review' element={<Review/>}/>
                 <Route path='/wallet' element={<Wallet/>}/>
                 <Route path='/chat' element={<Chat/>}/>
                 <Route path='/clender' element={<Clender/>}/>
             </Routes>
        
       </div>
       {/* <div className="box box3">3</div>
       <div className="box box4">4</div>
       <div className="box box5">5</div>
       <div className="box box6">6</div>
       <div className="box box7">7</div>
       <div className="box box8">8</div>
       <div className="box box9">9</div>
       <div className="box box10">10</div>
       <div className="box box11">11</div>
       <div className="box box12">12</div>
       <div className="box box13">13</div> */}
       {/* <div className="box box14">14</div>
       <div className="box box15">15</div>
       <div className="box box16">16</div>
       <div className="box box17">17</div> */}
    </div>
  )
}
