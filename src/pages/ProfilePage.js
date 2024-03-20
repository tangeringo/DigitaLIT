import React from 'react';
import ProfileDefaultIcon from "../assets/ProfilePage/profileDefault.png";

import "../styles/ProfilePage.styles.scss";


function ProfilePage() {
    return (
        <div className='bg-dark base-container'>
            <div className='strait-line-container'>
                <div className='bg-dark profile-picture-container'>
                        <img src={ProfileDefaultIcon}
                            className="profile-image"
                            alt=""
                        />
                </div>
                <div className='name-and-my-containers'>
                    <div className='bg-dark profile-name-container'></div>
                    <div className='my-containers'>
                        <div className='bg-dark my-story-container'></div>
                        <div className='bg-dark my-info-container'></div>
                    </div>
                </div>
            </div>
            <div className='strait-line-contact-info-container'></div>
           
        </div>
    );
}

export default ProfilePage;