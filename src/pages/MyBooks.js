import React from 'react';
import BookStorageItem from '../components/bookStorageItem.js';
import { bookData } from '../data/dummyData.js';


function MyEBookStorage() {
    return (
        <div style={{display: "flex"}}>
            {bookData.filter((_, index) => index < 4).map(item => (<BookStorageItem key={item.id} item={item}/>))}
        </div>
    );
}

export default MyEBookStorage;
