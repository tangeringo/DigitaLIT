import React, { useState } from 'react';

import { connect } from 'react-redux';
import { selectLibrarySelectedBook } from '../redux/library/librarySelector.js';

import BookStorageItem from '../components/bookStorageItem.js';
import '../styles/LibraryPage.styles.scss';
import { createStructuredSelector } from 'reselect';


function Library({ filteredBooks, selectedBook }) {
    const [buttonClicked, setButtonClicked] = useState({id: 0, showBook: false});
    // console.log("selectedBook: ", selectedBook);

    return (
        <div style={{display: "flex"}}>
            {filteredBooks.length?
                <div style={{display: "flex"}}>
                    <div style={{display: "flex", flexWrap: "wrap", backgroundColor: "black", width: "75%"}}>
                        {filteredBooks.map(item => (<BookStorageItem key={item.id} item={item} buttonName={"More Info"} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>))}
                    </div>
                    <div className="bg-dark" style={{display: "flex", width: "23%", height: "95%", position: "fixed", top: 85, right: `${buttonClicked.showBook? "0%": "-23%"}`}}>
                        <BookStorageItem item={selectedBook} buttonName={"Add to cart"}/>
                    </div>
                </div>
                :<h2 style={{marginTop: 100}}>No book matches</h2>
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    selectedBook: selectLibrarySelectedBook
})

export default connect(mapStateToProps)(Library);



// funguje celkom fajn, ale oprav bordel