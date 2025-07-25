import styled from 'styled-components'

export const HomeCauroselComponentStyles = styled.div`
    .carousel-caption {
    position: absolute;
    z-index: 999;
    }

    .carousel-caption h1 {
    letter-spacing: 0.3rem;
    }

    @media (max-width: 768px) {
    .banner {
        height: 200px !important;
    }

    .carousel-item img,
    .homeCarousel::after {
        height: 50vh;
    }
    }

    /* .homeCarousel::after {
  content: "";
  display: block;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(22, 93, 61, 0.95) 95%
  );
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
} */

.noImg {
  min-height: 300px;
}

.carousel-item {
  overflow: hidden;
  height: 60vh;
  position: relative;
  /* box-shadow: 0 15px 0px #3cd9d2; */
}
.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, .95) 0%, rgba(0, 0, 0, .25) 80%);
  z-index: 1;
  pointer-events: none;
}

.carousel-caption {
  /* background-color: rgba(34, 34, 34, .1); */
  position: absolute;
  z-index: 999;
  text-align: right !important;
  bottom: 30%;
  right: 10%;
  /* width: 75%; */
}

.carousel-caption h1 {
  letter-spacing: 0 !important;
  font-weight: 600 !important;
  font-size: 3rem;
  margin: 0px;
  /* font-family: "PT Sans Narrow", sans-serif; */
  /* font-weight: 700 !important; */
  /* font-style: normal; */
  text-shadow: 0px 4px 0 rgba(0,0,0, .3);
  font-family: "Barlow",sans-serif;
}

.subtitle {
  color: #ffffff;
  letter-spacing: .1rem;
  text-transform: uppercase;
  font-weight: normal !important;
  font-family: "Barlow",sans-serif;
}

@media (max-width: 768px) {
  .banner {
    height: 200px !important;
  }
  .carousel-caption {
    width: 70%;
    top: 50%;
  }
  .carousel-caption h1 {
    font-size: 1.6rem;
    font-weight: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .carousel-caption span.subtitle {
    display: none;
  }
  .carousel-caption p.description {
    font-size: 0.9rem !important;
    letter-spacing: 0.1rem;
    font-weight: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .carousel-item img,
  .homeCarousel::after {
    height: 50vh;
  }

  .homeCarousel::after {
  content: "";
  display: block;
  /* background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(22, 93, 61, 0.95) 95%
  ); */
  position: absolute;
  /* height: 65vh; */
  width: 100%;
  top: 0;
}

.carousel-caption {
    h1 { color:${({ theme }) => theme.carouselSlideTitleColor};     }
    p { color:${({ theme }) => theme.carouselSlideCaptionColor}; }
}

}

`