import React from 'react';
import "../styles/checkoutProduct.styles.scss";

import { SubmitButton } from '../styles/styled-components/ResetPasswordPage.styles.';

import { connect } from 'react-redux';
import { selectLibrarySelectedBook } from '../redux/library/librarySelector.js';
import { createStructuredSelector } from 'reselect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/fontawesome-free-solid';

function CheckoutProduct({ selectedBook }) {
    const { imgSource, name, price, quantity, description } = selectedBook;
    console.log("quantity: ", quantity)
    return (
        <div className="checkout-product-container">
            <div style={{padding: "15px", display: "flex"}}>
                <img src={imgSource} alt="" style={{width: "12.5vw", height: "25vh", border: "6px solid black"}}/>
                <div>
                    <div className='bg-dark product-label-container'>
                        <span className='product-label'>NAME</span>
                        <span className='product-label-value' style={{justifyContent: "end"}}>{name}</span>
                    </div>
                    <div className='bg-dark product-label-container'>
                        <span className='product-label'>QUANTITY</span>
                        <div  className='product-label-value' style={{justifyContent: "end"}} >
                            <FontAwesomeIcon icon={faPlus} color="white" size='1x' style={{marginLeft: "7px"}}/>
                            <span style={{margin: "-4px 2px 0 6px"}}>{quantity}</span>
                            <FontAwesomeIcon icon={faMinus} color="white" size='1x' style={{marginLeft: "7px"}}/>
                        </div>
                    </div>
                    <div className='bg-dark product-label-container'>
                        <span className='product-label'>PRICE</span>
                        <span className='product-label-value' style={{justifyContent: "end"}}>${price}</span>
                    </div>
                </div>
            </div>
            <div className='bg-dark description-container'>
                <span className='product-label'>DESCRIPTION [1-part]</span>
                <span className='product-label-value'>{description}</span>
            </div>
            <div className='bg-dark description-container'>
                <span className='product-label'>DESCRIPTION [2-part]</span>
                <span className='product-label-value'>{description}</span>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "auto"}}>
                <SubmitButton onClick={() => console.log("button clicked")} style={{width: "40%"}}>Buy now</SubmitButton>
            </div>
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    selectedBook: selectLibrarySelectedBook
})

export default connect(mapStateToProps)(CheckoutProduct);