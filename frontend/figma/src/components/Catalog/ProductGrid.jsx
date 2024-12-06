import "./Catolog.css"

const products = [
    { title: "Customized Journal", price: "$10", img: "img10.jpeg" },
    { title: "Floral Greeting Card Set", price: "$15", img: "img11.jpeg" },
    // Add more products
  ];
  
  const ProductGrid = () => {
    return (
      <section style={{ padding: '2rem', background: 'white' }}>
        <h2>Exclusive Festive Collection</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {products.map((product) => (
            <div key={product.title} style={{ border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}
            >
              <img src={product.img} alt={product.title} style={{ width: '100%' }} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProductGrid;