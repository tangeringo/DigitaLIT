import styled, { css } from 'styled-components';
import { creme, white } from '../../styles/colors.styles';


const onClickAnimationStyles = css`
    animation: pulse 1s normal ease-in-out;

    @keyframes pulse {
        0% {
          transform: scaleX(1.5) scaleY(1.5);
          background-color: ${creme};
        }
        50% {
          transform: scale3d(1.05, 1.05, 1.05);
          background-color: ${white};
        }
        to {
            background-color: ${creme};
            transform: scaleX(1.5) scaleY(1.5)
        }
      }
`;

type CartIconContainerProps = {
  canIconPulse: boolean;
}

export const CartIconContainer = styled.div<CartIconContainerProps>`
    margin: auto 0;
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${white};
    border-radius: 15px;
    ${({ canIconPulse }) => canIconPulse && onClickAnimationStyles};
`;

export const ItemsInCart = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 18px;
`;