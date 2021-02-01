import React from 'react';

const Product = ({ product, handleAddToCart }) => (
  <div className="Products-item">
    {/* local con strappi port:3006 */}
    {/* <img src={`http://localhost:3006${product.image[0].url}`} alt={product.title} /> */}
    <img src={product.image} alt={product.title} />

    <div className="Product-item-info">
      <h2>
        {product.title}
        <p>
          Precio: $
          {' '}
          {product.price}
        </p>
      </h2>
      <p>{ `Descripción: ${product.description} `}</p>
    </div>
    <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
  </div>
  )

export default Product;