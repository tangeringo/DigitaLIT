import styled from "styled-components";
import { BaseBackgroundContainer } from "../../styles/globalStyles.styles";
import { darkWhite } from "../../styles/colors.styles";


export const ContainerWrapper = styled(BaseBackgroundContainer)`
    height: fit-content;
    width: 100%;
`;


type BookItemsWrapperContainerProps = { 
    isSideBarOpen: boolean;
}

export const BookItemsWrapperContainer = styled.div<BookItemsWrapperContainerProps>`
    display: flex; 
    flex-wrap: wrap;
    background-color: ${props => props.theme.formBackground};
    transition: all .5s;
    width: ${({ isSideBarOpen }) => isSideBarOpen? "75%": "100%"};
    padding-top: 150px;
`;

type ShowBookProps = {
    showBook: boolean;
}

export const SideBarSection = styled.div.attrs(() => ({
    className: "bg-dark"
}))<ShowBookProps>`
    width: 380px;
    height: 95%;
    position: fixed;
    top: 85px;
    transition: all .5s;
    right: ${({ showBook }) => showBook ? "0%": "-380px"};
`;

export const NoMatchesText = styled.h2`
    color: ${darkWhite};
    margin: 400px auto;
`;
