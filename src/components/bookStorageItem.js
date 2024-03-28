import React from 'react';
import { useNavigate } from 'react-router-dom';

import "../styles/bookStorageItem.styles.scss";


import { displaySelectedBookItem } from '../redux/library/libraryActions';

import { useDispatch } from 'react-redux';


function BookStorageItem({ item, buttonName, buttonClicked, setButtonClicked }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id, imgSource, name, description, price } = item;



    // exporting function away
    const buttonIconOnClick = bookItem => {
        if (buttonName === "Show Book") navigate("/display-book-info");
        else if (buttonName === "Add to cart") navigate("/checkout");
        else if (buttonName === "More Info")
            if (!buttonClicked.showBook) {
                setButtonClicked({ id: id, showBook: true });
                dispatch(displaySelectedBookItem(bookItem));
            } else if (id !== buttonClicked.id ) {
                setButtonClicked({ id: id, showBook: true });
                dispatch(displaySelectedBookItem(bookItem));
            } else {
                setButtonClicked({ id: id, showBook: false }); 
            }
    }


    return (
        <div className='collection-item' style={buttonName === "Add to cart"? {marginTop: "80px", width: "80%", height: "70%"}: {}}>
            <div className='image' style={{ backgroundImage: `url(${imgSource})` }}></div>
            <div className='item-description'>
                <span>name: <span className='name'>{name}</span></span>
                {buttonName !== "Show Book"?
                    <h4 className='price'> ${price} </h4>
                    :null
                }
            </div>
            {buttonName === "Add to cart"?
                <div className='item-description'>
                    <span>description: <p className='description'>{description} </p></span>
                </div>
                :null
            }
            <button onClick={() => buttonIconOnClick(item)} className='cart-item-button'> {buttonName} </button>
        </div>
    );
}


export default BookStorageItem;