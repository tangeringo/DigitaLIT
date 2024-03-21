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
                    <div className='bg-dark profile-name-container'>
                    <p style={{color: "burlywood"}}>[USER NAME]</p>
                    </div>
                    <div className='my-containers'>
                        <div className='bg-dark my-story-container'>
                            <p style={{color: "burlywood"}}>[NAME'S story / bio:] [SIMPLE DESCRIPTION STORY ABOUT WHO THEY ARE AND ARE LOOKING FOR ]</p>
                        </div>
                        <div className='bg-dark my-info-container'>
                            <p style={{color: "burlywood"}}>[NAME'S information:] [SIMPLE INFORMATON WRITTEN IN BULLETPOINTS ABOUT GOALS / ACHIEVEMENTS ETC...]</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='strait-line-contact-info-container'>
                <p>connect with [NAME] through: [2-3 SOCIAL MEDIA ICONS]</p>
            </div>
           
        </div>
    );
}

export default ProfilePage;