import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/thumbs';
import { Phone } from '../../../../types/Phone';
import { Tablet } from '../../../../types/Tablet';
import { Accessory } from '../../../../types/Accessory';

type Props = {
  selectedProduct: Phone | Tablet | Accessory | undefined;
};

export const SwiperPhoto: React.FC<Props> = ({ selectedProduct }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 639);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = selectedProduct?.images || [];

  return (
    <div className="gallery">
      <div className="gallery__thumbs-main">
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          className="gallery-main"
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <img src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="gallery__thumbs">
        <Swiper
          onSwiper={() => setThumbsSwiper}
          direction={isMobile ? 'horizontal' : 'vertical'}
          slidesPerView={5}
          spaceBetween={16}
          className="gallery-thumbs"
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <img src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperPhoto;

//
// import React, { useRef, useState } from 'react';
// import './PicturesSlider.scss';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import type { Swiper as SwiperClass } from 'swiper';
//
// export const PicturesSlider: React.FC = () => {
//   const arrPicture = [
//     '/serviceImg/banners/banner-1.png',
//     '/serviceImg/banners/banner-2.png',
//     '/serviceImg/banners/banner-3.png',
//   ];
//
//   const swiperRef = useRef<SwiperClass | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//
//   return (
//     <div className="pictures-slider">
//       <div className="pictures-slider__up">
//         <div
//           className="icon-large"
//           onClick={() => swiperRef.current?.slidePrev()}
//         >
//           <div className="icon--arrow-left" />
//         </div>
//
//         <div className="pictures-slider__pictures">
//           <Swiper
//             loop={true}
//             onSwiper={(s) => (swiperRef.current = s)}
//             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//           >
//             {arrPicture.map((image, i) => (
//               <SwiperSlide key={i}>
//                 <img src={image} alt="" className="pictures-slider__picture" />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//
//         <div
//           className="icon-large"
//           onClick={() => swiperRef.current?.slideNext()}
//         >
//           <div className="icon--arrow-right" />
//         </div>
//       </div>
//
//       {/* DOTS */}
//       <div className="pictures-slider__dots">
//         {arrPicture.map((_, i) => (
//           <div
//             key={i}
//             className={i === activeIndex ? 'pictures-slider__dot--active' : 'pictures-slider__dot--disactive'}
//           />
//         ))}
//       </div>
//
//     </div>
//   );
// };
//
// export default PicturesSlider;
