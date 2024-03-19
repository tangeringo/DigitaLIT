import React from 'react';
import "../styles/bookStorageItem.styles.scss";


function BookStorageItem({ item }) {
    const { imgSource, name } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imgSource})` }}>
            </div>
            <div className='item-description'>
                <span className='name'> {name} </span>
                {/* <h4 className='price'> {"$35"} </h4> */}
            </div>
            <button onClick={() => console.log("more info")} className='cart-item-button' inverted> More Info </button>
        </div>
    );
}

export default BookStorageItem;