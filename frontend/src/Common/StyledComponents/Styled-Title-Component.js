import styled from "styled-components";

export const TitleSubTitleStyled = styled.div`
  h5 {
    font-weight: 600;
    color: ${({ theme }) => theme.gray444};
    line-height: 1.8rem !important;

    @media (max-width: 991px) {
    }
  }

  span {
    //font-size: .9rem !important;
    line-height: 1.2rem !important;
    font-weight: 300;
    display: block;
    color: ${({ theme }) => theme.clientPrimaryColor};
  }
`;
