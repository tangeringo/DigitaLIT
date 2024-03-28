import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock, faCheckSquare } from '@fortawesome/fontawesome-free-solid'
import { PageTitle, ResetPasswordCotntainer, PasswordInput, ProgresBarStatusText, ProgresBar, SubmitButton } from '../styles/styled-components/ResetPasswordPage.styles.';


function ResetPasswordPage() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const passwordStrength = ["weak", "medium", "good", "strong"];

    const getStrengthCounter = () => {
        if (newPassword.length <= 4) return 0;
        else if (newPassword.length <= 7 ) return 1;
        else if (newPassword.length <= 10 ) return 2;
        else return 3;
    }

    const strengthCounter = getStrengthCounter();

    return (
        <ResetPasswordCotntainer>
            <FontAwesomeIcon icon={faLock} color="#808080" size='3x' />
            <PageTitle>Reset Password</PageTitle>

            <div style={{width: "100%"}}>
                <PasswordInput onChange={(event) => setNewPassword(event.target.value)} placeholder='Enter new password:' type='password'
                    style={{padding: "8px", width: "90% ", marginBottom: "8px", borderRadius: "6px", border: "1px solid #808080", backgroundColor: "#000", color: "#fff"}}/>
                <PasswordInput onChange={(event) => setConfirmPassword(event.target.value)} type='password' placeholder='Confirm password:' 
                    style={{padding: "8px", width: "90% ", marginBottom: "8px", borderRadius: "6px", border: "1px solid #808080", backgroundColor: "#000", color: "#fff"}}/>
                {newPassword.length && confirmPassword.length && newPassword === confirmPassword?
                    <FontAwesomeIcon icon={faCheckSquare} color="green" size='2x' style={{marginLeft: "7px"}}/>
                    :null
                }
            </div>
            <ProgresBarStatusText>strength: {passwordStrength[strengthCounter]}</ProgresBarStatusText>
            <ProgresBar passwordLength={newPassword.length}></ProgresBar>
            <SubmitButton onClick={() => {console.log("Reset Password")}}>Reset Password:</SubmitButton>
        </ResetPasswordCotntainer>
    );
}


export default ResetPasswordPage;
