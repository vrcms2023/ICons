import styled from "styled-components";

export const KeypointsStyled = styled.div`
    
    .IconsMainKeys {
        padding: 16px 24px;
        background-color:rgb(175, 201, 253);
        // background-color: ${({ theme }) => theme.gray222};
    //    background: linear-gradient(163deg,rgba(109, 47, 155, 0.76) 0%, rgba(1, 32, 96, 0.7) 40%);
    //    background: linear-gradient(163deg,rgba(1, 32, 96, 0.80) 0%, rgba(109, 47, 155, 0.9) 50%);
    // background: linear-gradient(185deg,rgba(255, 255, 255, 0.8) 0%, rgba(1, 32, 96, 0.8) 30%);
    // background: linear-gradient(163deg,rgba(122, 155, 222, 1) 0%, rgba(102, 120, 170, 0.66) 100%);
        color: ${({ theme }) => theme.gray222};
        margin-bottom: 32px;
        border-radius: 8px;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .10) !important;
        
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
            width: 58px;
            height: 58px;
            border-radius: 50%;
        }
    }

    .point {
        font-size: 1.2rem;
        font-weight: 400;
    }
`;
