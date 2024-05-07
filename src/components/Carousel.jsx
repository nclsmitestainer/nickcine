import { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

const Carousel = (props) => {
  const carousel = useRef(null);

  const handleClickLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleClickRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <section className="relative max-[1280px]:mx-14">
      <div className="container block !mt-9 !mb-5">
        <h2 className="flex items-center uppercase gap-2 text-white font-semibold text-l font-display">
          {props.title}
          <Link to={props.redirect}>
            <img src="/arrow.svg" className="w-8 h-8 hover:animate-bouncex" />
          </Link>
        </h2>
      </div>
      <div
        ref={carousel}
        className="flex gap-5 overflow-x-auto overflow-y-hidden container transition-all scroll-smooth"
      >
        {props.children}
      </div>
      <button
        className="border-none w-16 h-80 absolute top-14 left-16 flex justify-center items-center cursor-pointer z-10 rounded rotate-180 max-[1400px]:left-2 max-[1300px]:-left-1 max-[1280px]:-left-14"
        onClick={handleClickLeft}
      >
        <img src="/arrow.svg" className="w-6 h-6" />
      </button>

      <button
        className="border-none w-16 h-80 absolute top-14 right-16 flex justify-center items-center cursor-pointer z-10 rounded max-[1400px]:right-2 max-[1300px]:-right-1 max-[1280px]:-right-14"
        onClick={handleClickRight}
      >
        <img src="/arrow.svg" className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Carousel;
