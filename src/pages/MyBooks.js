import React from 'react';
import Book1Img from "../assets/ProfilePage/book1example.jpg"
import Book2Img from "../assets/ProfilePage/book2example.jpg"
import Book3Img from "../assets/ProfilePage/book3example.jpg"
import Book4Img from "../assets/ProfilePage/book4example.jpg"

import BookStorageItem from '../components/bookStorageItem.js';


function MyEBookStorage() {
    const purchasedBooks = [
        {id: 1, imgSource: Book1Img, name: "Business Analysis"},
        {id: 2, imgSource: Book2Img, name: "Structures"},
        {id: 3, imgSource: Book3Img, name: "IT Development & Deployment"},
        {id: 4, imgSource: Book4Img, name: "Psychology"}
    ]
    return (
        <div style={{display: "flex"}}>
            {purchasedBooks.map(item => (<BookStorageItem key={item.id} item={item}/>))}
        </div>
    );
}

export default MyEBookStorage;
