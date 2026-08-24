import React, { useRef, useState } from 'react';
import './PicturesSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';

export const PicturesSlider: React.FC = () => {
  const arrPicture = [
    '/serviceImg/banners/banner-1.png',
    '/serviceImg/banners/banner-2.png',
    '/serviceImg/banners/banner-6.png',
  ];

  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="pictures-slider">
      <div className="pictures-slider__up">
        <div
          className="icon icon-large"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <div className="icon--arrow-left" />
        </div>

        <div className="pictures-slider__pictures">
          <Swiper
            loop={true}
            onSwiper={s => (swiperRef.current = s)}
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          >
            {arrPicture.map((image, i) => (
              <SwiperSlide key={i}>
                <img src={image} className="pictures-slider__picture" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className="icon icon-large"
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <div className="icon--arrow-right" />
        </div>
      </div>

      <div className="pictures-slider__dots">
        {arrPicture.map((image, i) => (
          <div
            key={i}
            className={
              i === activeIndex
                ? 'pictures-slider__dot--active'
                : 'pictures-slider__dot--disactive'
            }
          />
        ))}
      </div>
    </div>
  );
};

export default PicturesSlider;
