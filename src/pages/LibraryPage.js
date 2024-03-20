import React from 'react';

import BookStorageItem from '../components/bookStorageItem.js';


function Library({ filteredBooks }) {
   
    return (
        <div style={{display: "flex"}}>
            {filteredBooks.length?
                <div style={{display: "flex", flexWrap: "wrap", backgroundColor: "black", width: "75%"}}>
                    {filteredBooks.map(item => (<BookStorageItem key={item.id} item={item}/>))}
                </div>
                :<h2 style={{marginTop: 100}}>No book matches</h2>
            }
        </div>
    );
}

export default Library;
