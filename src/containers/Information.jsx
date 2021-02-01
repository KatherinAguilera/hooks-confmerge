import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.scss';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();
  const { cart } = state;
  // const { register, handleSubmit, errors } = useForm() // initialise the hook
  // const onSubmit = (data) => { console.log(data) } // callback when validation pass

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    history.push('/checkout/payment')
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" required />
            <input type="text" placeholder="Correo Electronico" name="email" required />
            <input type="text" placeholder="Direccion" name="address" required />
            <input type="text" placeholder="Apto" name="apto" required />
            <input type="text" placeholder="Ciudad" name="city" required />
            <input type="text" placeholder="Pais" name="country" required />
            <input type="text" placeholder="Estado" name="state" required />
            <input type="text" placeholder="Codigo postal" name="cp" required />
            <input type="text" placeholder="Telefono" name="phone" required />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.titles}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;