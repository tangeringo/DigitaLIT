import styled, { css } from "styled-components";


const progressBar25percent = css`
    background-color: red;
    width: 25%;
`;

const progressBar50percent = css`
    background-color: orange;
    width: 50%;
`;

const progressBar75percent = css`
    background-color: yellow;
    width: 75%;
`;

const progressBar100percent = css`
    background-color: green;
    width: 100%;
`;

const getProgressBarStyles = ({ passwordLength }) => {
    if (passwordLength <= 4) return progressBar25percent;
    else if (passwordLength <= 7 ) return progressBar50percent;
    else if (passwordLength <= 10 ) return progressBar75percent;
    else return progressBar100percent;
}

export const ResetPasswordCotntainer = styled.div`
    padding-top: 30%;
    margin: 8% auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    width: 400px;
    height: 600px;
    box-shadow: 0px 0px 12px #808080;
    border-radius: 8px;
    background-color: #191919;
    border: none;
`;

export const PageTitle = styled.h1`
    color: #808080;
    margin-bottom: 15vh;
`;
       
export const ProgresBarStatusText = styled.p`
    color: #fff;
    margin: 20px auto 10px 0;
`;

export const ProgresBar = styled.div`
    height: 10px;
    margin: 0 auto 40px 0;

    ${getProgressBarStyles}
`;

export const ResetPasswordButton = styled.button`
    background-color: #808080;
    border: 1px solid #808080;
    color: #fff;
    margin: 16px 0;
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    width: 100%;
    cursor: pointer;
`;


export const PasswordInput = styled.input`
    padding: 8px;
    width: 100%;
    margin-bottom: 8px;
    border-radius: 6px;
    border: 1px solid #808080;
    background-color: #000;
    color: #fff;
`;


// export const PasswordInput = styled.input.attrs(props => ({type: "password" }))`
//     padding: 8px;
//     width: 100%;
//     margin-bottom: 8px;
//     border-radius: 6px;
//     border: 1px solid #808080;
//     background-color: #000;
//     color: #fff;`;