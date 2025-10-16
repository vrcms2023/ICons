import styled from "styled-components";

export const TeamStyled = styled.div`
  background-color: ${({ theme }) => theme.transparent};

  // .editIcon {
  //   top: 10px;
  // }

  .title {
    color: ${({ theme }) => theme.teamTitleColor};
    font-weight: 500;
    font-size: 1.1rem;
  }

  // a {
  //   color: ${({ theme }) => theme.teamLinkColor};
  // }

  // .social {
  // border-top: 1px solid ${({ theme }) => theme.graye6};
  // }

  .social i {
    color: ${({ theme }) => theme.secondaryColor};

    font-size: 1.6rem;
    margin: 7px;
  }

  img {
    object-fit: cover;
    object-position: top;
    height: 300px;
    // width: 100%;
  }
  
  .ql-editor {
    padding: 0 !important;
  }

  .more {
    font-size: 14px;
  }

  .memberCard {
    background-color: ${({ theme }) => theme.white};
    // border:1px solid ${({ theme }) => theme.secondaryColor};
    // border-radius: 5px;
    margin: 0 0 30px 0;
    overflow: hidden;
    height: 570px;
    max-height: 100%;

    @media (max-width: 767px) {
      height: auto;
    }

    .memberDetails {
      color: ${({ theme }) => theme.teamTextColor};

      small {
        font-size: 0.7rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.clientSecondaryColor};
      }

      .strengths {
  //       display: -webkit-box;
  // -webkit-line-clamp: 4;
  // -webkit-box-orient: vertical;  
  // overflow: hidden;

      // @media(max-width: 480px) {
      //   -webkit-line-clamp: none;
      // }
        // p:before {
        //   content: "⬦  ";
        //   font-size: 16px;
        // }
        // p {
        //   margin-left: 10px;
        //   margin-bottom: 0px;
        // }
      }
    }

    span.linkLabel {
      margin: 10px;
      font-size: .8rem;
      // text-decoration: underline;
      // text-underline-offset: 2px;
      // text-decoration-color: rgba(109, 47, 155, .3) !important;

      strong {
        color: ${({ theme }) => theme.clientColor};
      }
    }
  }
`;
