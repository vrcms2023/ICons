import React, { useState } from "react";
import { getImagePath } from "../../util/commonUtil";
import RichTextView from "../../Common/RichTextView";

export const WeServeCarouselItem = ({ item, key, index }) => {
  const [hover, setHover] = useState(false);
  console.log("index", index);

  const mouseOver = (event) => {
    setHover(true);
  };

  const mouseOut = (event) => {
    setHover(false);
  };
  return (
    <div key={item.id} onMouseEnter={mouseOver} onMouseLeave={mouseOut}>
      <img
        src={getImagePath(item.path)}
        alt={item.alternitivetext}
        className="d-block w-100"
      />

      <h5 className="carousel-caption ">
        {item.carouse_title && (
          <h1 className="fw-bold my-4">{item.carouse_title}</h1>
        )}
      </h5>
      <RichTextView data={item?.carouse_description} showMorelink={false} />
    </div>
  );
};
