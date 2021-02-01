import { useState, useEffect } from 'react';
import axios from 'axios';
import initialState from '../initialState';
// local con strappi port:3006 */}
// const API = 'http://localhost:3006/products'

const API = 'https://conf-store-api.vercel.app/api.json'

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };

    getData();
  }, []);

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  }

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    });
  };
  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }
  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    state,
    addNewOrder,
    products
  };
};

export default useInitialState;