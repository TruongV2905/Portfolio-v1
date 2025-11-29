import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import type { Swiper as SwiperType } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type CarouselProps = SwiperProps & {
  slides: React.ReactNode[];
  className?: string;
  showNavigation?: boolean;
  showPagination?: boolean;
  showScrollbar?: boolean;
  autoPlay?: boolean;
  slidesPerGroup?: number;
  slidesPerView?: number;
};

function Carousel({
  slides,
  className = "",
  showNavigation = true,
  showPagination = true,
  showScrollbar = false,
  autoPlay = false,
  loop = true,
  spaceBetween = 20,
  slidesPerView = 1,
  slidesPerGroup = 1,
  breakpoints,
  ...swiperProps
}: CarouselProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };
  console.log(activeIndex);

  const hidePrev = activeIndex < slidesPerGroup;
  const hideNext = activeIndex >= slides.length - slidesPerView;

  return (
    <div className="relative w-full">
      <Swiper
        className={`w-full ${className}`}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={handleSlideChange}
        slidesPerGroup={slidesPerGroup}
        pagination={showPagination ? { clickable: true } : false}
        scrollbar={showScrollbar ? { draggable: true } : false}
        autoplay={
          autoPlay ? { delay: 2500, disableOnInteraction: false } : false
        }
        loop={loop}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        {...swiperProps}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex! justify-center items-center"
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Buttons */}
      {showNavigation && swiperInstance && (
        <>
          {!hidePrev && (
            <button
              onClick={() => swiperInstance.slidePrev()}
              className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 z-10 px-1 py-[30px] duration-500 bg-[rgba(128,128,128,0.9)] text-white rounded-lg"
            >
              <IoIosArrowBack />
            </button>
          )}
          {!hideNext && (
            <button
              onClick={() => swiperInstance.slideNext()}
              className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 z-10 px-1 py-[30px] duration-500 bg-[rgba(128,128,128,0.9)] text-white rounded-lg"
            >
              <IoIosArrowForward />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Carousel;
