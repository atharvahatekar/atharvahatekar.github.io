import styled from 'styled-components';

export const Load = styled.div`
    color:rgb(85, 94, 103);
    width: 100vw;
    height: 100vh;
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: 55px;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        display: inline-block;
        animation: pulse 0.4s alternate infinite ease-in-out;
        &:nth-child(odd) {
            animation-delay: 0.4s;
        }
    }
    @keyframes pulse {
        to {
            transform: scale(0.8);
            opacity: 0.5;
        }
    }

    @media (max-width: 767px) {
        font-size: 45px;
  }
`;
