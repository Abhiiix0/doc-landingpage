"use client";

import Image from "next/image";
import React from "react";
import imgs from "../public/images/success-storiesbg.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "A GHAZAN ALI JHAMRA",
    rating: 3,
    text: "My doctor provides professional, polite, and very helpful, making the whole process smooth and stress-free. The facility is clean and well-organized, and reports are delivered on time. I highly appreciate their efficiency and reliability, and would definitely recommend.",
    image: "/images/card-avtar.png",
  },
  {
    id: 2,
    name: "KARIM OUMRAN",
    rating: 4,
    text: "I had an exceptional experience From the professional, and genuinely caring. When it comes to health, there is absolutely no room for mistakes – and they delivered service that made me feel safe, supported, and well taken care of.",
    image: "/images/card-avtar.png",
  },
  {
    id: 3,
    name: "FRANCESCO LAZZAR",
    rating: 4.5,
    text: "Namita provided an excellent service. She was punctual, carried out the procedure quickly, was very professional and reassuring in the environment. Highly recommended.",
    image: "/images/pilot.png",
  },
  {
    id: 4,
    name: "SARAH MITCHELL",
    rating: 5,
    text: "Absolutely outstanding care from the entire team. I felt completely at ease throughout the visit. The level of professionalism and compassion shown was truly remarkable.",
    image: "/images/vj.png",
  },
  {
    id: 5,
    name: "AHMED AL RASHID",
    rating: 5,
    text: "The best home healthcare experience I've ever had. and very knowledgeable. They made the entire process seamless and comfortable.",
    image: "/images/card-avtar.png",
  },
];

const renderStars = (rating) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={i <= rating ? "#FFD700" : "#E5E7EB"}
      >
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    );
  }

  return stars;
};

const TestimonialsSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgs.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pb-[80px] md:pb-[137px]"
    >
      {/* Heading */}
      <div className="py-[25px] md:py-[37px]">
        <p className=" text-2xl md:text-3xl lg:text-5xl text-center text-[#004984]">
          <span className="italic"> Our Client’s </span>
          <span className="font-bold text-[#028650]">Success Stories</span>
        </p>
      </div>

      <div className="mx-auto testimonial-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={10}
          centeredSlides
          initialSlide={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="testimonialSwiper"
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          pagination={{
            el: ".testimonial-pagination",
            clickable: true,
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!w-fit">
              {({ isActive }) => (
                <div
                  className={`transition-all w-[95vw] md:w-[896px] duration-500 rounded-[8px] overflow-hidden flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-[57px] py-6 md:py-[24px]
                  ${
                    isActive
                      ? "bg-[#004984] text-white scale-100"
                      : "bg-white text-black scale-95 md:scale-90 opacity-90 md:opacity-80"
                  }`}
                >
                  {/* Image */}
                  <Image
                    src={testimonial.image}
                    height={100}
                    width={100}
                    alt={testimonial.name}
                    className="w-full md:max-w-[294px] h-[220px] md:h-[341px] rounded-[12px] border object-cover"
                  />

                  {/* Text Content */}
                  <div className="text-sm md:text-lg flex flex-col gap-3">
                    <p className="line-clamp-4 md:line-clamp-6">
                      {testimonial.text}
                    </p>

                    <h3 className="text-base font-semibold">
                      {testimonial.name}
                    </h3>

                    <div className="flex gap-1">
                      {renderStars(Math.round(testimonial.rating))}
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="hidden md:block">
                    <svg
                      width="37"
                      height="27"
                      viewBox="0 0 37 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill={isActive ? "white" : "#004984"}
                        d="M28.5905 10.7675C29.0018 10.7675 29.3965 10.8289 29.7894 10.8848C29.6621 10.4663 29.5312 10.0407 29.3209 9.65832C29.1106 9.1028 28.7823 8.62124 28.4558 8.13607C28.1828 7.61122 27.7014 7.25591 27.3473 6.80681C26.9765 6.37034 26.4711 6.07996 26.0709 5.71743C25.678 5.33868 25.1634 5.1493 24.7539 4.88236C24.326 4.64248 23.9534 4.37735 23.5549 4.2511L22.5608 3.8507L21.6865 3.49539L22.581 0L23.6822 0.259719C24.0345 0.346292 24.4643 0.447294 24.9531 0.568135C25.4529 0.658316 25.986 0.905411 26.5799 1.13086C27.1665 1.38697 27.8453 1.56012 28.4761 1.97134C29.1106 2.36453 29.8429 2.69279 30.4885 3.21944C31.1137 3.76232 31.8682 4.23307 32.4252 4.92385C33.0339 5.56954 33.6352 6.24769 34.1019 7.01964C34.6423 7.75551 35.0094 8.56353 35.3967 9.36252C35.7472 10.1615 36.0294 10.9786 36.2599 11.7721C36.6971 13.3629 36.8926 14.8743 36.9682 16.1675C37.0309 17.4625 36.994 18.5393 36.9166 19.3184C36.8889 19.6864 36.8373 20.0435 36.8004 20.2906L36.7543 20.5936L36.7063 20.5828C36.3782 22.0813 35.623 23.4583 34.528 24.5546C33.433 25.651 32.0429 26.4217 30.5186 26.7778C28.9943 27.1339 27.3981 27.0608 25.9145 26.5668C24.431 26.0729 23.1207 25.1783 22.1354 23.9867C21.1501 22.795 20.5299 21.3549 20.3466 19.833C20.1633 18.3111 20.4244 16.7695 21.0997 15.3866C21.7749 14.0037 22.8368 12.836 24.1624 12.0186C25.4881 11.2012 27.0233 10.7674 28.5905 10.7675ZM8.30085 10.7675C8.71218 10.7675 9.1069 10.8289 9.49978 10.8848C9.37251 10.4663 9.24155 10.0407 9.03128 9.65832C8.821 9.1028 8.49268 8.62124 8.1662 8.13607C7.89322 7.61122 7.4118 7.25591 7.05765 6.80681C6.68691 6.37034 6.18151 6.07996 5.78125 5.71743C5.38837 5.33868 4.87376 5.1493 4.46428 4.88236C4.03635 4.64248 3.66376 4.37735 3.26534 4.2511L2.27115 3.8507L1.39685 3.49539L2.29144 0L3.39262 0.259719C3.74492 0.346292 4.17468 0.447294 4.66348 0.568135C5.16334 0.658316 5.69641 0.905411 6.29034 1.13086C6.87505 1.38878 7.55567 1.56012 8.18649 1.97315C8.821 2.36633 9.55327 2.69459 10.1989 3.22124C10.8241 3.76413 11.5785 4.23487 12.1356 4.92385C12.7443 5.56954 13.3456 6.24769 13.8122 7.01964C14.3527 7.75551 14.7197 8.56353 15.1071 9.36252C15.4576 10.1615 15.7398 10.9786 15.9703 11.7721C16.4075 13.3629 16.603 14.8743 16.6786 16.1675C16.7413 17.4625 16.7044 18.5393 16.627 19.3184C16.5993 19.6864 16.5477 20.0435 16.5108 20.2906L16.4647 20.5936L16.4167 20.5828C16.0886 22.0813 15.3334 23.4583 14.2384 24.5546C13.1434 25.651 11.7533 26.4217 10.229 26.7778C8.70473 27.1339 7.10848 27.0608 5.62492 26.5668C4.14137 26.0729 2.83113 25.1783 1.84579 23.9867C0.860451 22.795 0.240261 21.3549 0.0569687 19.833C-0.12632 18.3111 0.134773 16.7695 0.810055 15.3866C1.48533 14.0037 2.54721 12.836 3.87283 12.0186C5.19845 11.2012 6.73366 10.7674 8.30085 10.7675Z"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls */}
        <div className="flex w-fit mx-auto items-center justify-center gap-6 mt-6 md:mt-10">
          <div className="testimonial-prev cursor-pointer">
            <svg width="15" height="25" viewBox="0 0 15 25" fill="none">
              <path
                d="M12.5 2.5L2.5 12.5L12.5 22.5"
                stroke="#028650"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="testimonial-pagination"></div>

          <div className="testimonial-next cursor-pointer">
            <svg width="15" height="25" viewBox="0 0 15 25" fill="none">
              <path
                d="M2.5 22.5L12.5 12.5L2.5 2.5"
                stroke="#028650"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
