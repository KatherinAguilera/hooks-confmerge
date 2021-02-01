import React from 'react';
import '../styles/components/Products.scss';
import Empty from '../assets/empty-cart-icon.png';

const NotProducts = () => (
  <div className="Not-products">
    <h3>Sin pedidos...</h3>
    <picture>
      <img src={Empty} alt="No hay pedidos" />
    </picture>
  </div>
  )

export default NotProducts;