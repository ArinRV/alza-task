import React, { useEffect, useState } from "react";
import { DTONotebooks } from "../../pages/Notebooks/NotebooksPage";
import { RatingStars } from "../RatingStars/RatingStars";
import "./CarouselItem.css";

type CarouselItemProps = {
  item: DTONotebooks;
};

export const CarouselItem = ({ item }: CarouselItemProps) => {
  return (
    <div className="carousel-item">
      <div className="top">
        <div className="image-box">
          <a>
            <img src={item.img}></img>
          </a>
        </div>
        <div className="item-name">
          <div className="h3DrakBlueBold" style={{ lineHeight: "19px" }}>
            {item.name}
          </div>
        </div>
        <div className="star-box">
          <RatingStars rating={item.rating} />
        </div>
        <div className="h4LightGray">{item.spec}</div>
      </div>

      <div className="bottom">
        <div className="h2Green">{item.price}</div>
      </div>
    </div>
  );
};
