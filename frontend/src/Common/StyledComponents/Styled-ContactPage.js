import styled from "styled-components";

export const ContactPageStyled = styled.div`
  .contactPage {
    .title {
      color: ${({ theme }) => theme.clientSecondaryColor};
      font-size: 1rem !important;
      text-transform: uppercase;
      font-weight: 500;
    }

    .addressItem  {
      @media(max-width: 480px) {
        border-bottom: 1px solid ${({ theme }) => theme.verylightgray};

        
      }
    }

    .contactAddress {
      color: ${({ theme }) => theme.textColor};
  
      i {
        color: ${({ theme }) => theme.iconColor};
      }
    }
    
    .quickContact {
      background: ${({ theme }) => theme.lightWhiteFB};

      .formTitle {
        color: ${({ theme }) => theme.textColor};
      }

      @media(max-width: 768px) {
        .btn {
          width: 100%;
        }
      }
    }
    @media(max-width: 768px) {
      .flipCSS {
        flex-direction: column-reverse;
      }
    }
  }
`;
