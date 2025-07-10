import styled from "styled-components";

export const KeypointsStyled = styled.div`
    
    .IconsMainKeys {
        padding: 16px 24px;
        // background-color:rgb(141, 141, 141);
        // background-color: ${({ theme }) => theme.gray333};
    //    background: linear-gradient(163deg,rgba(109, 47, 155, 0.76) 0%, rgba(1, 32, 96, 0.7) 40%);
    //    background: linear-gradient(163deg,rgba(1, 32, 96, 0.80) 0%, rgba(109, 47, 155, 0.9) 50%);
    background: linear-gradient(185deg,rgba(255, 255, 255, 0.8) 0%, rgba(1, 32, 96, 0.8) 30%);
        color: ${({ theme }) => theme.white};
        margin-bottom: 32px;
        border-radius: 8px;
        // box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .10) !important;
        
    }

    .keyPoint {
        background:rgb(255, 255, 255, .95);
        border-radius: 50%;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
        // background: linear-gradient(163deg,rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%);
        width: 64px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 32px;
        }
    }

    .point {
        font-size: 1.3rem;
        font-weight: 400;
    }
`;
