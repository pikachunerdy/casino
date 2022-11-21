import { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Pagination, Scrollbar, A11y } from "swiper";
import Button from "../../core/Button/Button";
import HomeCard from "./HomeCard";
import BlogCard from "../../core/Card/BlogCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TopCarousel = (props) => {
  const swiperHandle = useSwiper();
  return (
    <div>
      <Swiper
        modules={[Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiperHandle = swiper;
        }}
        className="gap-4 !p-5"
      >
        {props.cards &&
          props.cards.map((card, i) => {
            return (
              <SwiperSlide className="flex justify-center" key={i}>
                <HomeCard
                  title={card.title}
                  value={card.value}
                  content={card.content}
                  avatar={card.avatar}
                  user={card.user}
                ></HomeCard>
              </SwiperSlide>
            );
          })}
        {props.blogCards &&
          props.blogCards.map((blogCard, i) => {
            return (
              <SwiperSlide className="flex justify-center" key={i}>
                <BlogCard
                  cardImage={blogCard.cardImage}
                  date={blogCard.date}
                  title={blogCard.title}
                  content={blogCard.content}
                  states={blogCard.states}
                ></BlogCard>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="flex justify-between gap-3">
        <div
          className="flex justify-left mt-3 gap-3"
          onClick={() => {
            if (!!swiperHandle) {
              swiperHandle.slidePrev();
            }
          }}
        >
          <FaArrowLeft className="mt-1" />
          Previous
        </div>
        <div
          className="flex justify-end mt-3 gap-3"
          onClick={() => {
            if (!!swiperHandle) {
              swiperHandle.slideNext();
            }
          }}
        >
          <FaArrowRight className="mt-1" />
          Next
        </div>
      </div>
    </div>
  );
};

export default TopCarousel;
