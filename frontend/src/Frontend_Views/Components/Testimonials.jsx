import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../../Common/Title";
import { getImagePath } from "../../util/commonUtil";
import RichTextView from "../../Common/RichTextView";

const Testimonials = ({ testimonis }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonis?.length > 1) {
      const lastIndex = testimonis?.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }

      if (index > lastIndex) {
        setIndex(0);
      }
    }
  }, [index, testimonis]);

  useEffect(() => {
    if (testimonis?.length > 1) {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 5000);
      return () => {
        clearInterval(slider);
      };
    }
  }, [index, testimonis]);

  const ListOfTestimonials = testimonis?.map((item, indexPeople) => {
    let position = "nextSlide";
    if (indexPeople === index) {
      position = "activeSlide";
    }
    if (indexPeople === index - 1 || (index === 0 && indexPeople === testimonis?.length - 1)) {
      position = "lastSlide";
    }
    return (
      <div className={`${position} article position-absolute`} key={item.id}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-enter align-items-center">
                {!item.path ? (
                  <i className="fa fa-user" aria-hidden="true"></i>
                ) : (
                  <img src={getImagePath(item.path)} className="testimonialImg" alt="User" />
                )}
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center">
                <Title title={item.testimonial_title} cssClass="text-start fw-medium fs-3 title m-0" />
                <RichTextView data={item?.testimonial_description} showMorelink={false} className=" m-auto mb-4 fs-6" />

                <div className="d-flex justify-content-center justify-content-md-end gap-5">
                  <Link to="" onClick={() => setIndex(index + 1)}>
                    {" "}
                    {/* <img src={leftArrow} alt="Previous" width="42" height="42" /> */}
                    <i className="fa fa-chevron-left fs-4" aria-hidden="true"></i>
                  </Link>
                  <Link to="" onClick={() => setIndex(index - 1)}>
                    {" "}
                    {/* <img src={rightArrow} alt="Next" width="42" height="42" /> */}
                    <i className="fa fa-chevron-right fs-4" aria-hidden="true"></i>
                  </Link>
                </div>
            </div>
          </div>
        </div>
        

        
      </div>
    );
  });

  return <>{ListOfTestimonials}</>;
};

export default Testimonials;
