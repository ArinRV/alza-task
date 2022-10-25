import { useEffect, useState } from "react";
import { DTONotebooks } from "../../pages/Notebooks/NotebooksPage";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import "./Carousel.css";

type CarouselProps = {
  items: DTONotebooks[];
};

export const Carousel = ({ items }: CarouselProps) => {
  const [carousel, setCarousel] = useState<DTONotebooks[]>([]);
  const [firstElementIndex, setFirstElementIndex] = useState<number>(0);

  function updateCarouselElements(index: number) {
    if (items.length < 1) {
      return [];
    }

    let i = index % items.length;
    if (i < 0) {
      i = items.length - -1 * i;
    }

    const currentCarousel: DTONotebooks[] = [];
    const maxCarouselItems = 5;
    items.slice(i, i + maxCarouselItems).map((p, i) => currentCarousel.push(p));
    if (currentCarousel.length < maxCarouselItems) {
      items
        .slice(0, maxCarouselItems - currentCarousel.length)
        .map((p, i) => currentCarousel.push(p));
    }

    setFirstElementIndex(i);
    setCarousel(currentCarousel);
  }

  function arrowClick(handle: any, fun: Function) {
    const slider = handle.target.closest(".container").querySelector(".slider");
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const newIndex = fun(sliderIndex);
    slider.style.setProperty("--slider-index", newIndex);
    updateCarouselElements(fun(firstElementIndex));
  }

  useEffect(() => {
    updateCarouselElements(0);
  }, [items]);

  return (
    <div className="container">
      <div className="carousel-container">
        <button
          className="handle left-handle"
          onClick={(handle) => arrowClick(handle, (si: number) => si - 1)}
        >
          <div className="text">&#8249;</div>
        </button>
        <div className="slider">
          {carousel.map((p, i) => (
            <CarouselItem key={i} item={p}></CarouselItem>
          ))}
        </div>
        <button
          className="handle right-handle"
          onClick={(handle) => arrowClick(handle, (si: number) => si + 1)}
        >
          <div className="text">&#8250;</div>
        </button>
      </div>
    </div>
  );
};
