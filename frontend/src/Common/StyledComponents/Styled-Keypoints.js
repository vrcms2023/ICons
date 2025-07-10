import styled from "styled-components";

export const KeypointsStyled = styled.div`
    
    .IconsMainKeys {
        padding: 16px;
        // background-color: ${({ theme }) => theme.clientColor};
    //    background: linear-gradient(163deg,rgba(109, 47, 155, 0.76) 0%, rgba(1, 32, 96, 0.7) 40%);
       background: linear-gradient(163deg,rgba(1, 32, 96, 0.80) 0%, rgba(109, 47, 155, 0.9) 50%);
        color: ${({ theme }) => theme.white};
        margin-bottom: 32px;
        border-radius: 8px;
        // box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .10) !important;
        
    }

    .keyPoint {
        background:rgba(255, 255, 255, 0.75);
        border-radius: 50%;
        box-shadow: 0 .5rem 3rem rgba(0, 0, 0, .50) !important;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 48px;
        }
    }
`;
