import React from 'react';
import ProfileDefaultIcon from "../assets/ProfilePage/profileDefault.png";


function ProfilePage() {
    return (
        <div>
            <img src={ProfileDefaultIcon}
                style={{display: "flex", marginTop: 130, zIndex: 1}}
                width="60"
                height="60"
                className="d-inline-block align-center"
                alt=""
            />
        </div>
    );
}

export default ProfilePage;