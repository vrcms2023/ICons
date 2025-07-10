import styled from "styled-components"

export const HomeDynamicServiceStylesComponent = styled.div`

.homeDynamciServicesIntro {
  padding: 30px 0;
  background-color:${({ theme }) => theme.lightWhiteF8}; 
  color: ${({ theme }) => theme.textColor};

  .briefIntro {
    .btn {
      border: 0 !important;
      text-decoration: underline;

      &:hover {
        background-color: transparent !important;
      }
    }
  }

  .introDecTitleCss {
    p, p span {
      text-align: left !important;
    }
  }

  .homeDynamciServices {

    .briefIntro {
        position: relative;
        height: 300px;
        max-height: 100%;
        padding: 32px;
        border-bottom: 5px solid rgba(1, 32, 96, .70); 
        background-size: 72px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: right 15px bottom;
        transition: border-color 0.4s ease, border-bottom-width 0.3s ease, background-color 0.4s ease;

        @media (max-width: 1023px) {
          padding: 16px;
        }

        &:hover {
            background-color:rgba(0, 0, 0, 0.2);
            border-bottom: 15px solid ${({ theme }) => theme.clientSecondaryColor};
            
            // #FF9D00; 

            * {
            color: ${({ theme }) => theme.clientSecondaryColor};
            }
        }
        
        h5, .quill, a {
          position: relative
        }
        h5 {
            z-index: 2;
            font-weight: 500 !important;
            font-size: 1.6rem !important;
             color: ${({ theme }) => theme.clientSecondaryColor} !important;
            hyphens: manual;
            overflow-wrap: break-word; /* optional, for better word breaking */
            word-break: break-word;    /* optional, for better word breaking */
        }

        .quill {
          z-index: 3;

          p, p span, h1 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
          }

          p, p span, h1, h1 strong, span {
            background: transparent !important;
            color: ${({ theme }) => theme.gray333} !important;
            font-family: Roboto;
            font-size: 1rem !important;
            font-family: roboto;
            font-weight: normal;
            line-height: 1.5;
          }

          .description {
            p:not(:first-child) {
              display: none;
            }
          }

          .ql-editor {
            padding: .3rem 0 0px;
          }
          
          }

          a {
            color: #444;
            z-index: 4;
            font-size: .9rem;
            margin-top: 2rem;
            display: block;
          }
        }

        .briefIntro:after {
          content: "";
          // background: linear-gradient(173deg,rgba(109, 47, 155, 0.9) 1%, rgba(1, 32, 96, .75) 100%);
          // background: linear-gradient(135deg,rgba(109, 47, 155, 0.9) 15%, rgba(0, 0, 0, .2) 100%);
          // background: linear-gradient(163deg, hsl(220, 100.00%, 79.60%) 25%, hsl(219, 100.00%, 95.00%) 100%);
          background: linear-gradient(163deg,rgba(122, 155, 222, 1) 0%, rgba(245, 245, 245, 1) 100%);
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          z-index: 0;
          color: #fff;
        }
    }
  }


`;