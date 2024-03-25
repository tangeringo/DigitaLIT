import React from 'react';
import BookStorageItem from '../components/bookStorageItem.js';

import { bookData } from '../data/dummyData.js';


function MyEBookStorage() {
    return (
        <div style={{display: "flex", height: "100vh"}}>
            {bookData.filter((_, index) => index < 4).map(item => (<BookStorageItem key={item.id} item={item} buttonName={"Show Book"}/>))}
        </div>
    );
}

export default MyEBookStorage;
