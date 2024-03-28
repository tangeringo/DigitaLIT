import React from 'react';
import PaymentForm from '../components/paymentForm.tsx';
import CheckoutProduct from '../components/checkoutProductComponent.js';


function CheckoutPage() {
    return (
        <div style={{marginTop: "170px", display: "flex", margin: "20vh 0", justifyContent: "center"}}>
            <PaymentForm />
            <CheckoutProduct />
            {/* 2.) implement stripe */}
        </div>
    );
}

export default CheckoutPage;