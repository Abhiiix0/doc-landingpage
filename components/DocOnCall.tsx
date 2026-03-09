"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type CardType = {
  number: string;
  title: string;
  description: string;
  iconw: string;
  iconb: string;
};

const cards: CardType[] = [
  {
    number: "01",
    title: "Comfort of Home",
    description:
      "Don't let sickness slow you down. Experience healthcare designed for your life, convenient, private, and always on your terms.",
    iconw: "/images/icons/Home-Vector.png",
    iconb: "/images/icons/Home-vector-blue.png",
  },
  {
    number: "02",
    title: "Zero Waiting, Instant Relief",
    description:
      "Skip the trip. Our doctors treat you right where you are, so you can recover faster and stress-free in familiar surroundings.",
    iconw: "/images/icons/clock-white.png",
    iconb: "/images/icons/clock.png",
  },
  {
    number: "03",
    title: "Personalized Attention",
    description:
      "Our doctors focus only on you, listening, caring, and customizing every step of your treatment. No distractions, just dedicated care.",
    iconw: "/images/icons/people-heart-white.png",
    iconb: "/images/icons/people-heart-blue.png",
  },
  {
    number: "04",
    title: "Immediate Treatments",
    description:
      "Get diagnosed, treated, and prescribed, all in a single visit. No pharmacy runs or extra appointments needed.",
    iconw: "/images/icons/heart-white.png",
    iconb: "/images/icons/heart-blue.png",
  },
  {
    number: "05",
    title: "Expert Doctors",
    description:
      "Our certified doctors bring years of experience to your doorstep, ensuring accurate diagnosis and the best possible care.",
    iconw: "/images/icons/man-white.png",
    iconb: "/images/icons/man-blue.png",
  },
  {
    number: "06",
    title: "Affordable Care",
    description:
      "Quality healthcare shouldn't break the bank. Our services are priced fairly with full transparency — no hidden charges.",
    iconw: "/images/icons/peoples-white.png",
    iconb: "/images/icons/peoples-blue.png",
  },
];

function Card({ card, active }: { card: CardType; active: boolean }) {
  return (
    <article
      className={[
        "relative w-full md:w-[400px] lg:w-[420px]",
        "h-[240px] sm:h-[250px] lg:h-[260px]",
        "rounded-2xl overflow-hidden transition-all duration-300",
        active ? "text-white" : "bg-white ring-1 ring-slate-100",
      ].join(" ")}
      aria-label={card.title}
    >
      {active && (
        <Image
          src="/images/wpc-card1bg.png"
          alt=""
          width={420}
          height={260}
          priority={false}
          className="absolute rounded-2xl inset-0 object-cover scale-109 md:scale-103 w-full h-full"
        />
      )}

      <div
        className={[
          "absolute right-6 top-5 text-[64px] font-extrabold",
          active ? "text-white/15" : "text-slate-100",
        ].join(" ")}
      >
        {card.number}
      </div>

      <div className="relative z-10 p-6">
        <h3
          className={[
            "text-sm md:text-[20px] font-semibold",
            active ? "text-white" : "text-slate-800",
          ].join(" ")}
        >
          {card.title}
        </h3>

        <div
          className={[
            "mt-2 h-[2px] w-40 rounded-full",
            active
              ? "bg-gradient-to-r from-white to-[#004984]"
              : "bg-gradient-to-r from-[#004984] to-white",
          ].join(" ")}
        />

        <p
          className={[
            "mt-4 text-[12px] md:leading-6 max-w-[260px]",
            active ? "text-white/90" : "text-slate-500",
          ].join(" ")}
        >
          {card.description}
        </p>
      </div>

      <div className="absolute bottom-0 right-0 h-[120px] w-[120px] rounded-tl-[50px] bg-[#EAF4FB]" />

      <div className="absolute bottom-0 right-0 z-20">
        <div
          className={[
            "h-[100px] w-[100px] rounded-[28px] flex items-center justify-center",
            active ? "bg-[#004984]" : "bg-white border border-slate-200",
          ].join(" ")}
        >
          <Image
            src={active ? card.iconw : card.iconb}
            alt={`${card.title} icon`}
            width={48}
            height={48}
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
}

export default function DocOnCall() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="w-full bg-[#EAF4FB] pt-12 pb-22 md:py-16 md:px-4"
      aria-labelledby="doc-on-call-benefits"
    >
      <div className="w-full mx-auto">
        <header className="text-center px-4">
          <h2
            id="doc-on-call-benefits"
            className="text-xl sm:text-2xl md:text-3xl font-extrabold italic text-[#004984]"
          >
            Here's Why Patients In Dubai Prefer{" "}
            <span className="text-emerald-600 not-italic">Doctor On Call</span>
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-center text-sm text-slate-600">
            At Call My Doctor, we offer world-class healthcare straight to your
            door, so you can focus on getting better, faster.
          </p>
        </header>

        <div className="relative mt-6 md:mt-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={"auto"}
            centeredSlides
            grabCursor
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            initialSlide={2}
            onSlideChange={(swiper) => setActive(swiper.realIndex)}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={card.number} style={{ width: "auto" }}>
                <Card card={card} active={i === active} />
              </SwiperSlide>
            ))}
          </Swiper>

          <nav
            className="pointer-events-none absolute -bottom-14 left-0 w-full md:inset-0 z-30 flex items-center"
            aria-label="Slider navigation"
          >
            <div className="relative w-fit md:w-full md:max-w-[1600px] mx-auto flex gap-8 md:justify-between px-2 md:px-4">
              <button
                className="prev-btn pointer-events-auto flex cursor-pointer border border-[0.5px] items-center justify-center w-9 h-9 bg-white rounded-full shadow text-slate-500 hover:text-slate-900 hover:shadow-lg transition"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                className="next-btn pointer-events-auto flex border border-[0.5px] cursor-pointer items-center justify-center w-9 h-9 bg-white rounded-full shadow text-slate-500 hover:text-slate-900 hover:shadow-lg transition"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
