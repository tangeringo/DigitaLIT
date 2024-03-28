import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';

import 'react-credit-cards-2/dist/es/styles-compiled.css';
import "../styles/paymentForm.styles.scss";



const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div>
      <div>
          <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
          />
      </div>
      <form className="credit-card-container">
        <div className='input-section-container'>
            <input
                type="text"
                name="number"
                className="bg-dark"
                placeholder="Card Number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
            <input
                type="text"
                name="name"
                className="bg-dark"
                placeholder="Full Name"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
        </div>
        <div className='input-section-container'>
            <input
                type="text"
                name="expiry"
                className="bg-dark"
                placeholder="Expiry Date"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
            <input
                type="text"
                name="cvc"
                className="bg-dark"
                placeholder="CVV"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
        </div>
      </form>
    </div>
  );
}


export default PaymentForm;