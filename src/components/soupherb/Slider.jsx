import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";



import "swiper/css";
import "swiper/css/navigation";

const FashionSlider = ({slides}) => {


  return (
    <div className="fashion-slider-section">
      <div className="slidebtn">
        <div className="custom-prev">
         <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
        <path d="M45.6 12.0006C45.6002 11.1561 45.3776 10.3264 44.9547 9.59534C44.5317 8.86431 43.9233 8.25782 43.191 7.83711C42.4587 7.41641 41.6283 7.19638 40.7837 7.19925C39.9391 7.20211 39.1103 7.42777 38.3808 7.85344L9.588 24.6486C8.86137 25.0703 8.25812 25.6752 7.83854 26.4031C7.41897 27.1309 7.19776 27.9561 7.19703 28.7962C7.1963 29.6363 7.41608 30.4618 7.83439 31.1904C8.2527 31.9189 8.8549 32.5249 9.5808 32.9478L38.3808 49.7478C39.1103 50.1735 39.9391 50.3992 40.7837 50.402C41.6283 50.4049 42.4587 50.1849 43.191 49.7642C43.9233 49.3435 44.5317 48.737 44.9547 48.0059C45.3776 47.2749 45.6002 46.4452 45.6 45.6006V12.0006Z" fill="#B1EBE0" stroke="#B1EBE0" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>

        <div className="custom-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
        <path d="M12 12.0006C11.9997 11.1561 12.2223 10.3264 12.6453 9.59534C13.0683 8.86431 13.6767 8.25782 14.409 7.83711C15.1413 7.41641 15.9717 7.19638 16.8163 7.19925C17.6609 7.20211 18.4897 7.42777 19.2192 7.85344L48.012 24.6486C48.7386 25.0703 49.3419 25.6752 49.7615 26.4031C50.181 27.1309 50.4022 27.9561 50.403 28.7962C50.4037 29.6363 50.1839 30.4618 49.7656 31.1904C49.3473 31.9189 48.7451 32.5249 48.0192 32.9478L19.2192 49.7478C18.4897 50.1735 17.6609 50.3992 16.8163 50.402C15.9717 50.4049 15.1413 50.1849 14.409 49.7642C13.6767 49.3435 13.0683 48.737 12.6453 48.0059C12.2223 47.2749 11.9997 46.4452 12 45.6006V12.0006Z" fill="#B1EBE0" stroke="#B1EBE0" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        </div>

            <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={800}
            centeredSlides={true}
            slidesPerView={1.6}
            spaceBetween={30}
            navigation={true}

            slidesPerGroup={1}
            loopAdditionalSlides={3}
            watchOverflow={true}

      navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}

  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}

  breakpoints={{
    0: {
      slidesPerView: 1.4,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 1.4,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 1.8,
      slidesPerGroup: 1,
    },
  }}


  className="supslider"
>
        {slides?.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="#!" className="fashion-card">
                <div className="imgover">
                <img src={item.img} alt="" />
                </div>
                <h4>{item.name}</h4>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>    
  );
};

export default FashionSlider;