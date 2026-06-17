import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import team1 from "../../assets/about/ream1.png";
import team2 from "../../assets/about/team2.png";
import team3 from "../../assets/about/team3.png";
import team4 from "../../assets/about/team4.png";

const AboutSnapShot = () => {
  const teamData = [
    {
      img: team1,
      name: "Jhone Doe",
      role: "Web Dev",
    },
    {
      img: team2,
      name: "Michael",
      role: "UI Designer",
    },
    {
      img: team3,
      name: "Robert",
      role: "Developer",
    },
    {
      img: team4,
      name: "Sophia",
      role: "Marketing",
    },
    {
      img: team1,
      name: "Jhone Doe",
      role: "Web Dev",
    },
    {
      img: team2,
      name: "Michael",
      role: "UI Designer",
    },
    {
      img: team3,
      name: "Robert",
      role: "Developer",
    },
    {
      img: team4,
      name: "Sophia",
      role: "Marketing",
    },
  ];

  return (
    <div className="snapshot">
      <div className="container">
        <div className="snapshot-head">
          <h2 data-gsap>Team Snapshots</h2>

          <div className="snap-btns" data-gsap>
            <button className="snap-prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 16L2 12L6 8M2 12H22"
                  stroke="#1A766D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button className="snap-next">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 16L22 12L18 8M22 12H2"
                  stroke="#1A766D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={12}
          slidesPerView={4.5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".snap-prev",
            nextEl: ".snap-next",
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            576: {
              slidesPerView: 2.2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4.5,
            },
          }}
          className="snapshot-slider"
        >
          {teamData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="team-card" data-gsap>
                <img src={item.img} alt="" />

                <div className="team-overlay">
              <div className="socials"> <a href="#!"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path d="M14.0016 5.2001H14.0096M5.60156 1.6001H13.6016C15.8107 1.6001 17.6016 3.39096 17.6016 5.6001V13.6001C17.6016 15.8092 15.8107 17.6001 13.6016 17.6001H5.60156C3.39242 17.6001 1.60156 15.8092 1.60156 13.6001V5.6001C1.60156 3.39096 3.39242 1.6001 5.60156 1.6001ZM12.8016 9.0961C12.9003 9.76189 12.7866 10.4419 12.4766 11.0393C12.1666 11.6367 11.6761 12.1212 11.0749 12.4238C10.4736 12.7264 9.79232 12.8318 9.12779 12.7248C8.46326 12.6179 7.84937 12.3042 7.37343 11.8282C6.8975 11.3523 6.58375 10.7384 6.47682 10.0739C6.36988 9.40934 6.47521 8.72801 6.77782 8.1268C7.08043 7.52558 7.56491 7.03509 8.16235 6.72509C8.75979 6.41509 9.43977 6.30137 10.1056 6.4001C10.7847 6.50081 11.4134 6.81727 11.8989 7.30274C12.3844 7.78822 12.7009 8.41696 12.8016 9.0961Z" stroke="#B1EBE0" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/> </svg></a> <a href="#!"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path d="M12.8016 6.4001C14.0746 6.4001 15.2955 6.90581 16.1957 7.80599C17.0959 8.70616 17.6016 9.92706 17.6016 11.2001V16.8001H14.4016V11.2001C14.4016 10.7758 14.233 10.3688 13.9329 10.0687C13.6329 9.76867 13.2259 9.6001 12.8016 9.6001C12.3772 9.6001 11.9703 9.76867 11.6702 10.0687C11.3701 10.3688 11.2016 10.7758 11.2016 11.2001V16.8001H8.00156V11.2001C8.00156 9.92706 8.50728 8.70616 9.40745 7.80599C10.3076 6.90581 11.5285 6.4001 12.8016 6.4001Z" stroke="#B1EBE0" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.80156 7.2001H1.60156V16.8001H4.80156V7.2001Z" stroke="#B1EBE0" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3.20156 4.8001C4.08522 4.8001 4.80156 4.08375 4.80156 3.2001C4.80156 2.31644 4.08522 1.6001 3.20156 1.6001C2.31791 1.6001 1.60156 2.31644 1.60156 3.2001C1.60156 4.08375 2.31791 4.8001 3.20156 4.8001Z" stroke="#B1EBE0" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/> </svg></a> </div>

                  <div className="team-info">
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutSnapShot;