import React, { useState } from 'react';
import "../styles/ResetPasswordPage.styles.scss";

function ForgotPasswordPage() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className='reset-password-container'>
            <h1 className='page-title'>Reset Password</h1>
            <input onChange={(event) => setNewPassword(event.target.value)} type='password' placeholder='Enter new password:' />
            <input onChange={(event) => setNewPassword(event.target.value)} type='password' placeholder='Confirm password:' />
            <p className='progess-bar-status-text'>strength: [VALUE]</p>
            <div className='prigress-bar'></div>
            <button onClick={() => {console.log("Reset Password")}} className='reset-password-button'>Reset Password:</button>
        </div>
    );
}

// install styled components and add the length property

export default ForgotPasswordPage;
