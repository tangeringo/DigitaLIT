import React, { useState } from 'react';

import BookStorageItem from '../components/bookStorageItem.js';
import '../styles/LibraryPage.styles.scss';


function Library({ filteredBooks }) {
    const [buttonClicked, setButtonClicked] = useState({id: 0, isCLicked: false});
   
    return (
        <div style={{display: "flex"}}>
            {filteredBooks.length?
                <div style={{display: "flex"}}>
                    <div style={{display: "flex", flexWrap: "wrap", backgroundColor: "black", width: "75%"}}>
                        {filteredBooks.map(item => (<BookStorageItem key={item.id} item={item} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>))}
                    </div>
                    <div style={{display: "flex", width: "23%", height: "75%", backgroundColor: "black", position: "fixed", top: 90, right: `${buttonClicked.isCLicked? "0%": "-23%"}`}}>
                        {/* Display the selected book item from redux? */}
                    </div>
                </div>
                :<h2 style={{marginTop: 100}}>No book matches</h2>
            }
        </div>
    );
}

export default Library;
