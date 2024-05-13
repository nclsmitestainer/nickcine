import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = (props) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          width: '32px',
          height: '32px',
        }}
        onClick={onClick}
      >
        <img
          className="w-8 h-8 rotate-180"
          src="/arrow-navigation.svg"
          alt=""
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          width: '32px',
          height: '32px',
        }}
        onClick={onClick}
      >
        <img className="w-8 h-8" src="/arrow-navigation.svg" alt="" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 6,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
          dots: false,
        },
      },
    ],
  };

  return (
    // <section className="relative max-[1280px]:mx-14">
    //   <div className="container block !mt-9 !mb-5">
    //     <h2 className="flex items-center uppercase gap-2 text-white font-semibold text-l font-display">
    //       {props.title}
    //       <Link to={props.redirect}>
    //         <img src="/arrow.svg" className="w-8 h-8 hover:animate-bouncex" />
    //       </Link>
    //     </h2>
    //   </div>
    //   <div
    //     ref={carousel}
    //     className="flex gap-5 overflow-x-auto overflow-y-hidden container transition-all scroll-smooth"
    //   >
    //     <button
    //       className="border-none w-16 h-80 absolute flex justify-center items-center cursor-pointer z-10 rounded rotate-180"
    //       onClick={handleClickLeft}
    //     >
    //       <img src="/arrow.svg" className="w-6 h-6" />
    //     </button>
    //     {props.children}
    //     <button
    //       className={`border-none w-16 h-80 absolute top-14 right-[${arrowPosition}px] flex justify-center items-center cursor-pointer z-10 rounded max-[1400px]:right-2 max-[1300px]:-right-1 max-[1280px]:-right-14`}
    //       onClick={handleClickRight}
    //     >
    //       <img src="/arrow.svg" className="w-6 h-6" />
    //     </button>
    //   </div>
    //   {/* <button
    //     className={`border-none w-16 h-80 absolute top-14 left-[${arrowPosition}px] flex justify-center items-center cursor-pointer z-10 rounded rotate-180 max-[1400px]:left-2 max-[1300px]:-left-1 max-[1280px]:-left-14`}
    //     onClick={handleClickLeft}
    //   >
    //     <img src="/arrow.svg" className="w-6 h-6" />
    //   </button> */}

    //   {/* <button
    //     className={`border-none w-16 h-80 absolute top-14 right-[${arrowPosition}px] flex justify-center items-center cursor-pointer z-10 rounded max-[1400px]:right-2 max-[1300px]:-right-1 max-[1280px]:-right-14`}
    //     onClick={handleClickRight}
    //   >
    //     <img src="/arrow.svg" className="w-6 h-6" />
    //   </button> */}
    // </section>

    <section className="relative max-[1280px]:mx-14">
      <div className="container block !mt-9 !mb-5">
        <h2 className="flex items-center uppercase gap-2 text-white font-semibold text-l font-display">
          {props.title}
          <Link to={props.redirect}>
            <img src="/arrow.svg" className="w-8 h-8 hover:animate-bouncex" />
          </Link>
        </h2>
      </div>
      <Slider className="container justify-center" {...settings}>
        {props.children}
      </Slider>
    </section>
  );
};

export default Carousel;
