import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/bottomNavbar.styles.scss';


function BottomNavBar () {
    return (
        <div style={{position: "fixed", bottom: 0, width: "100%"}}>
            <div className="bg-dark social-media-items">
                <FontAwesomeIcon className="brand-item" icon={['fab', 'facebook']} color="white" size='2x' />
                <FontAwesomeIcon className="brand-item" icon={['fab', 'whatsapp']} color="white" size='2x' />
                <FontAwesomeIcon className="brand-item" icon={['fab', 'linkedin']} color="white" size='2x' />
                <FontAwesomeIcon className="brand-item" icon={['fab', 'instagram']} color="white" size='2x' />
            </div>
        </div>
    )
}

export default BottomNavBar;