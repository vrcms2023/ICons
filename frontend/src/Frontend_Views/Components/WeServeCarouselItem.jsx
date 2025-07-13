import React, { useState } from "react";
import { getImagePath } from "../../util/commonUtil";
import RichTextView from "../../Common/RichTextView";

export const WeServeCarouselItem = ({ item, index }) => {
  const [hover, setHover] = useState(false);

  const mouseOver = (event) => {
    setHover(true);
  };

  const mouseOut = (event) => {
    setHover(false);
  };
  return (
    <div key={item.id} onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="weServe">
      <img
        src={getImagePath(item?.path)}
        alt={item.alternitivetext}
        className="d-block w-100"
      />

      <div className="carousel-info">
        {item.carouse_title && (
          <h1 className="">{item.carouse_title}</h1>
        )}
      </div>
      <RichTextView data={item?.carouse_description} showMorelink={false} />
    </div>
  );
};
