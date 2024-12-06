import { OrderDeatail } from "../DashboardComponent/OrderDeatail"
import CheckoutForm from "./CheckoutForm"
import OrderTracking from "./OrderTracking"
import "./Cheakout.css"

export const Cheakout = () => {
  return (
    <div className="app">
    <main>
      <div className="container1">
        <section>
          <CheckoutForm />
        </section>
        <section>
          {/* <OrderTracking /> */}
        </section>
      </div>
    </main>
  </div>
  )
}
