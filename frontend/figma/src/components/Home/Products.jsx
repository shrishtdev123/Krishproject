

function Products() {
  return (
    <section className="products" id="section">
      <div className="visionContainer">
        {/* Vision Section */}
        <div className="visionText">
          <h1 style={{ fontWeight: 1000 }}>Vision</h1>
          <p>
            Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat.
            Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit
            aliquet at. Magna nam platea justo.
          </p>
          <button className="learnMoreButton">Learn More</button>
        </div>
        <div className="visionImage">
          <img src="img5.jpeg" alt="Vision" />
        </div>
      </div>

      {/* Existing Product Grid */}
      <div>
        <h1 style={{ fontWeight: 1000 }}>Products</h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s
        standard dummy text.
      </div>
      <div className="grid">
        <div>
          <img src="/img1.jpeg" alt="Product 1" />
          <h1>Stationary Items</h1>
          Ante mus blandit sapien sociosqu per consequat ad.
        </div>

        {/* Second Product */}
        <div>
          <img src="/img2.jpeg" alt="Product 2" id="img2" />
          <h1>Couple Gift Items</h1>
          Ante mus blandit sapien sociosqu
        </div>

        {/* Third Product */}
        <div>
          <img src="img3.jpeg" alt="Product 3" id="img3" />
          <h1>Greeting Cards</h1>
          Ante mus blandit sapien sociosqu per consequat ad.
        </div>

        {/* Fourth Product */}
        <div>
          <img src="img4.jpeg" alt="Product 4" id="img4" />
          <h1>Gift Items</h1>
          Ante mus blandit sapien sociosqu per consequat ad.
        </div>
      </div>
    </section>
  );
}

export default Products;