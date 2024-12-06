import "./Relatedproduct.css"

export const Relatedpage = () => {
    const products = [
        {    id: 1, 
             name: 'Red label',
             price: 3000, 
             image: '/img17.jpeg' 
        },

        {    id: 2, 
             name: 'Black Label',
             price: 6000, 
             image: '/img16.jpeg'
         },
      ];
    
      return (
        <section className="related-products">
          <h3>Related Products</h3>
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p className="price">Rs. {product.price}</p>
              </div>
            ))}
          </div>
        </section>
      );
}
