import styled from "styled-components";

export const ServicesStyled = styled.div`
    background-color: ${({ theme }) => theme.white};

    .services {
      ul, ol {
        margin: 40px 25px;

        li {
            padding: 15px;
          }
      }
    }
      
      .services ul 
      
      .normalCSS,
      .flipCSS {
      }
      
      .flipCSS {
        flex-direction: row-reverse;
      }
      
      .servicesPage {
        ul, ol {
            margin: 15px 10px;

            li {
                border-bottom: 1px solid ${({ theme }) => theme.lightgray};
                padding: 12px 7px;
              }
        }

        img {
            object-fit: cover;
            object-position: center;
            width: 100%;
            // height: 100%;
        }
      }
      
      .viewAllServices {
        padding: 8px !important;
        font-weight: 600 !important;
        font-size: .8rem;
      }
      
      .servicePageLinks {
        // width: 600px; 
        // margin: 0 auto;
        // height: 86px;
      }
        ul {
          overflow-y: auto;
          border: 1px solid ${({ theme }) => theme.lightgray};
        }
        li {
          padding: 5px 10px;
            cursor: pointer;
            span.notPublished {
              color: #ccc !important;
            }

            .publishState a {
              text-decoration: none !important;
            }

            &:hover {
              background:  ${({ theme }) => theme.verylightgray};
              

              a {
              text-decoration: none !important;
            }

            }
          }

        .pageTitle {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            // text-decoration: none;
            font-size: .9rem;
            // height: 20px;
          }
      
      
      .addPageForm {
        // background-color: ${({ theme }) => theme.teritoryColor};
        // width: 600px; 
        // margin: 0 auto;
      }

      .servicePageLinks {
        background-color: ${({ theme }) => theme.white};
      }

      
`;
