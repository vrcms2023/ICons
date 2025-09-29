import styled from "styled-components";

export const HomeDynamicServiceStylesComponent = styled.div`
  margin: 24px 0 0;

  .homeDynamciServicesIntro {
    padding: 16px 0 48px;
    background-color: #ecececff;
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
      p,
      p span {
        text-align: left !important;
      }
    }

    .homeDynamciServices {
      .briefIntro {
        position: relative;
        height: 300px;
        max-height: 100%;
        padding: 32px;
        // border-bottom: 5px solid rgba(1, 32, 96, 0.7);
        border-bottom: 6px solid ${({ theme }) => theme.gray444};
        background-size: 72px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: right 15px bottom;
        transition:
          border-color 0.4s ease,
          border-bottom-width 0.3s ease,
          background-color 0.4s ease;

        @media (max-width: 1023px) {
          padding: 16px;
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
          // border: 4px solid rgba(255, 255, 255, .4);
          border-bottom: 20px solid rgba(255, 255, 255, 0.4);

          // #FF9D00;

          * {
            color: ${({ theme }) => theme.clientSecondaryColor};
          }
        }

        h5,
        .quill,
        a {
          position: relative;
        }
        h5 {
          z-index: 2;
          font-weight: 500;
          font-size: 1.6rem;
          color: ${({ theme }) => theme.clientSecondaryColor};
          hyphens: manual;
          overflow-wrap: break-word; /* optional, for better word breaking */
          word-break: break-word; /* optional, for better word breaking */
        }

        .quill {
          z-index: 3;

          p,
          p span,
          h1 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
          }
          ol,
          ul {
            display: none !important;
          }

          p,
          p span,
          h1,
          h1 strong,
          span {
            background: transparent;
            color: ${({ theme }) => theme.gray333};
            font-family: Roboto;
            font-size: 1rem;
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
            padding: 0.3rem 0 0px;
          }
        }

        a {
          color: #444;
          z-index: 4;
          font-size: 0.9rem;
          margin-top: 2rem;
          display: block;
        }
      }

      .briefIntro:after {
        content: "";
        // background: linear-gradient(173deg,rgba(109, 47, 155, 0.9) 1%, rgba(1, 32, 96, .75) 100%);
        // background: linear-gradient(135deg,rgba(109, 47, 155, 0.9) 15%, rgba(0, 0, 0, .2) 100%);
        // background: linear-gradient(163deg, hsl(220, 100.00%, 79.60%) 25%, hsl(219, 100.00%, 95.00%) 100%);
        // background: linear-gradient(
        //   163deg,
        //   rgba(122, 155, 222, 1) 0%,
        //   rgba(245, 245, 245, 1) 100%
        // );
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 0;
        color: #fff;
      }

      .row {
        .col-md-4 .briefIntro {
          background-repeat: no-repeat;
          background-position: right 15px bottom;
          border-radius: 3px;

          &:hover {
            box-shadow: 0 0.8rem 1rem rgba(0, 0, 0, 0.35) !important;
          }
          * {
            color: #fff !important;
          }

          @media (max-width: 768px) {
            background-position: right 32px bottom;
          }
        }

        .col-md-4:nth-child(1) .briefIntro {
          // background-image: url('../../../Images/studies.png');
          // background: linear-gradient(90deg,rgba(228, 157, 32, 1) 0%, rgba(203, 192, 28, 1) 100%);
          background: linear-gradient(180deg, rgba(228, 157, 32, 1) 0%, rgba(232, 156, 26, 1) 100%);
          // background: #E49D20 !important;
        }

        .col-md-4:nth-child(2) .briefIntro {
          // background-image: url('../../../Images/engineering.png');
          // background: #CBC01C !important;
          // background: linear-gradient(90deg,rgba(203, 192, 28, 1) 0%, rgba(230, 219, 40, 1) 100%);
          background: linear-gradient(180deg, rgba(203, 192, 28, 1) 0%, rgba(199, 187, 18, 1) 100%);
        }

        .col-md-4:nth-child(3) .briefIntro {
          // background-image: url('../../../Images/calculator.png');
          // background: #E6DB28 !important;
          // background: linear-gradient(90deg,rgba(230, 219, 40, 1) 0%, rgba(167, 207, 46, 1) 100%);
          background: linear-gradient(180deg, rgba(222, 209, 19, 1) 0%, rgba(212, 199, 17, 1) 100%);
        }

        .col-md-4:nth-child(4) .briefIntro {
          // background-image: url('../../../Images/management.png');
          // background: #58981B !important;
          // background: linear-gradient(245deg,rgba(88, 152, 27, 1) 0%, rgba(228, 157, 32, 1) 100%);
          background: linear-gradient(180deg, rgba(167, 207, 46, 1) 0%, rgba(148, 186, 32, 1) 100%);
        }

        .col-md-4:nth-child(5) .briefIntro {
          // background-image: url('../../../Images/engineer.png');
          // background: #8DB21F !important;
          // background: linear-gradient(245deg,rgba(141, 178, 31, 1) 0%, rgba(88, 152, 27, 1) 100%);
          background: linear-gradient(180deg, rgba(141, 178, 31, 1) 0%, rgba(126, 161, 21, 1) 100%);
        }

        .col-md-4:nth-child(6) .briefIntro {
          // background-image: url('../../../Images/engineering-services.png');
          // background: #A7CF2E !important;
          // background: linear-gradient(245deg,rgba(167, 207, 46, 1) 0%, rgba(141, 178, 31, 1) 100%);
          background: linear-gradient(180deg, rgba(88, 152, 27, 1) 0%, rgba(83, 145, 25, 1) 100%);
        }
      }
    }
  }
`;
