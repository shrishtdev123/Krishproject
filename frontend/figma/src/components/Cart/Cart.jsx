
import "./Cart.css"
export const Cart = () => {
  return (
    <div className="cart">
     
          <div className="grid grid-col-4">
                  <div className="bx price_value">
                  <div className="price ">
                      <img src="image.png" alt="" />
                  </div>
                  <div className="value">12332</div>
                  </div>
                  <div className="bx price_value">
                       <div className="price">Unit price</div>
                       <div className="value">12332</div>
                  </div>
                  <div className="bx price_value">
                        <div className="qunty">Qty</div>
                        <div>counter btn here</div>
                  </div>
                  <div className="bx price_value">
                         <div className="totalrps">TotalRps</div>
                        <div className="combine">
                         <div className="total_value">35333</div>
                         <button>delete</button>
                        </div>
                  </div>
          </div>
    </div>
  )
}
