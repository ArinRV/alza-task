import React from "react";
import "./RatingStars.css";

type RatingStarsProps = {
  rating: number;
};

export const RatingStars = ({ rating }: RatingStarsProps) => {
  return (
    <div className="stars-container">
      <div
        className="rating"
        ref={(el) => el?.style.setProperty("--rating-value", rating.toString())}
      ></div>
    </div>
  );
};
