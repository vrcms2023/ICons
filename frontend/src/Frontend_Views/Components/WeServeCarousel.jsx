import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import { axiosClientServiceApi } from "../../util/axiosUtil";
import { getImagePath, sortByFieldName } from "../../util/commonUtil";

// Styles
import "./Carousel.css";
import SkeletonImage from "../../Common/Skeltons/SkeletonImage";
import { WeServeCarouselItem } from "./WeServeCarouselItem";

const WeServeCarousel = ({ carouselState, category }) => {
  const { isLoading } = useSelector((state) => state.loader);
  const [carousel, setCarousel] = useState([]);
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    variableWidth: true,
    draggable: true,
    swipeToSlide: true,
    cssEase: "ease",
  };

  useEffect(() => {
    const getCarousels = async () => {
      try {
        const response = await axiosClientServiceApi.get(
          `carousel/clientCarousel/${category}/`
        );

        if (response?.status === 200) {
          let key = Object.keys(response.data);
          const carouselList = sortByFieldName(
            response.data[key],
            "carouse_position"
          );

          setCarousel(carouselList);
        }
      } catch (error) {
        console.log("unable to access ulr because of server is down");
      }
    };
    if (!carouselState) {
      getCarousels();
    }
  }, [carouselState]);

  return (
    <div className="">
      {isLoading ? <SkeletonImage /> : ""}
      <div className="slider-container">
        <Slider {...settings}>
          {carousel.map((item, index) => {
            return (
              <WeServeCarouselItem key={item.id} item={item} index={index} />
            );
          })}
        </Slider>
      </div>

      {carousel.length === 0 && (
        <div className="d-flex justify-content-center align-items-center fs-5 text-muted text-center noImg">
          {!isLoading && <p>Please add images for Carousel...</p>}
        </div>
      )}
    </div>
  );
};

export default WeServeCarousel;
