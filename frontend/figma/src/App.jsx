
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Admin } from './components/Admin/Admin'
import { Dashboard } from './components/DashboardComponent/Dashboard'
import { Cart } from './components/Cart/Cart'
import ShoppingCart from './components/Cart/ShoppingCart'
import Navbar from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { ToastContainer} from 'react-toastify';
import { Shop } from './components/shop/shop'
import { About } from './components/About/About'
import { Detailpage } from './components/Detailpage/Detailpage'
import { Cheakout } from './components/Cheakoutpage/Cheakout'
import { NewTracking } from './components/Cheakoutpage/NewTracking'
import { Contact } from './components/Contact/Contact'

function App() {


  return (
      <BrowserRouter>
                  <div>
                  
                  {/* <Cart/> */}
                           {/* <Admin/>  */}
                     <Navbar/>
                 </div>
           <Routes>
               <Route path='/cart' element={<ShoppingCart/>}/>
               <Route path='/home' element={<Home/>}/>
               <Route path='/shop' element={<Shop/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/detailpage/:id/:index' element={<Detailpage/>}/>
               <Route path='/cheakout' element={<Cheakout/>}/>
               <Route path='/track/:tackingid' element={<NewTracking/>}/>
               <Route path='/contact' element={<Contact/>}/>
           </Routes>
           <div>
             <Footer/>
           </div>
           <ToastContainer/>
      </BrowserRouter>
  )
}

export default App
