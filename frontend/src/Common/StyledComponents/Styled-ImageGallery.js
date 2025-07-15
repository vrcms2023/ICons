import styled from "styled-components";

export const ImageGalleryStyled = styled.div`
  padding: 40px 0 240px;

  @media(max-width: 1024px) {
    padding: 40px 0 100px;
  }

  @media(max-width: 480px) {
    padding: 40px 0 70px;
  }

  .gallery img {
    cursor: pointer;
    // border: 3px solid ${({ theme }) => theme.gray};
    border-radius: 15px;
    height: 200px;
    filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
  transition: filter 0.3s ease-in-out;
  object-fit: cover;

    &:hover {
      -webkit-filter: grayscale(0);
      filter: none;
      border: 3px solid ${({ theme }) => theme.black};
    }
  }

  .homeGalleryCarousel {
    background: ${({ theme }) => theme.gray999};
    border-radius: 18px;
    height: 400px;

    @media(max-width: 1024px) {
      height: 350px !important;
    }

    @media(max-width: 480px) {
      height: 200px !important;
    }

    .homeCarousel{
      border-radius: 30px;
    }

    .container {
        margin-top: -45px;

        @media(max-width: 1024px) {
          margin-top: -50px;
        }
    }

    .carousel-item, .carousel-inner {
        border-radius: 30px;
        overflow: hidden;
    }

    .carousel-inner { 
      @media(max-width: 1024px) {
          width: 90% !important;
          margin: 0 auto;
        }
    }
    .carousel-item {
      border: 3px dashed ${({ theme }) => theme.gray999};
      img {
        height: 620px !important;
        border-radius:  0px;
        box-shadow: 0 1rem 1rem rgba(0, 0, 0, 1) !important;

        @media(max-width: 1024px) {
          height: 450px !important;
        }

        @media(max-width: 480px) {
          height: 310px !important;
        }
      }

      .carousel-caption {
        width: 100% !important;
        margin: 0 auto;
        padding: 24px 48px;
        left: 0 !important;
        bottom: 0 !important;
        background: rgba(0, 0, 0, .5);

        @media(max-width: 480px) {
          padding: 16px 32px;
        }

        h1 {
          margin: 0px !important;
          font-size: 2.5rem !important;

          @media(max-width: 1024px) {
            text-align: center;
          }

           @media(max-width: 480px) {
            font-size: 1.3rem !important;
          }
        }
      }
    }

    .carousel-control-next {
        right: -12%;
        @media(max-width: 1024px) {
          right: -7%;
        }

        @media(max-width: 480px) {
          right: -10%;
        }
    }

    .carousel-control-prev {
        left: -12%;
        @media(max-width: 1024px) {
          left: -7%;
        }

        @media(max-width: 480px) {
          left: -10%;
        }
    }

    .carousel-control-prev span, .carousel-control-next span {
        border: 2px solid #fff;
        border-radius: 50px;
        background-size: 20px;
    }
  }

  .viewAllBtn {
    margin-top: 170px
  }

    
`;
