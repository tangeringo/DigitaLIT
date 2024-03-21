import React from 'react';
import "../styles/bookStorageItem.styles.scss";


function BookStorageItem({ item, buttonClicked, setButtonClicked }) {
    const { id, imgSource, name } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imgSource})` }}>
            </div>
            <div className='item-description'>
                <span className='name'> {name} </span>
                {/* <h4 className='price'> {"$35"} </h4> */}
            </div>
            <button onClick={() => {
                !buttonClicked.isCLicked?
                    setButtonClicked({ id: id, isCLicked: true })
                    :setButtonClicked({ id: id, isCLicked: false })
            }} className='cart-item-button' inverted> More Info </button>
        </div>
    );
}

export default BookStorageItem;