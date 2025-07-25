import styled from "styled-components";

export const NewsStyled = styled.div`
  .card {
    position: relative;
    min-height: 440px;
    background-color: ${({ theme }) => theme.newsCardBg};
    color: ${({ theme }) => theme.newsCardTextColor};
    margin-bottom: 30px;
    border-radius: 0px;
    border: 1px solid ${({ theme }) => theme.verylightgray};
    // overflow: hidden;

    @media (max-width: 480px) {
      min-height: auto;
    }

    .ql-editor {
      padding: 0 
    }

    .cardInfo {
      h5 {
        font-size: 1.1rem !important;
        color: ${({ theme }) => theme.gray444};
      }
      .newsDate {
        color: ${({ theme }) => theme.clientSecondaryColor};
      }

      a {
        font-size: .9rem
        position: absolute;
      }
    }

    .title {
      color: ${({ theme }) => theme.newsCardTitleColor};
    }

    img {
      // height: 160px;
      // width: 100%;
      // object-fit: cover;
      // object-position: bottom;
    }

    .card-body {
      // a {
      //     color:${({ theme }) => theme.primaryColor} !important;

      //     &:hover {
      //         color:${({ theme }) => theme.secondaryColor} !important;
      //     }
      // }
    }
    
  }
  .homeNews img {
    height: 240px;
    width: 100%;
    object-fit: cover;
  }
  .adminView {
    img {
      width: 80px !important;
      height: 80px;
    }

    .moreLink {
      font-size: .9rem
    }
  }
`;
