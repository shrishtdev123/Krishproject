
import "./contact.css"
export const Contact = () => {
  return (
    <div className="container3">
    <div className="boxy1">
        <div className="boxy2">
            <h1 className="heading">Contact Us</h1>
        <label><input type=" email" id="email" placeholder="Email"/></label>
        <label><input type=" text" id="name" placeholder="Name"/></label>
        <label><input type="number" id="number" placeholder="Phone Number"/></label>
        <h2>Comment Here Your Issue</h2>
        <div className="comment">
            <textarea className="comment" placeholder="comment here">
            </textarea>
        </div>
        <button className="button11">Submit</button>
    </div>
    </div>
    <div className="boxy1"><h1 className="heading1">Mera Bestie</h1>
        <div className="address"><h2 className="heading2">All You Need Is Here</h2></div>
    </div>
</div>
  )
}

