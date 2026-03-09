"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import herobg from "../public/herobg.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const badges = [
    {
      className:
        "-left-6 top-24 md:-left-6 md:top-[250px] lg:left-4 lg:top-[290px] xl:top-[250px] badge-float-1",
      text: "24/7 Availability",
      textColor: "#028650",
      icon: "/images/icons/badge-icon4.png",
    },
    {
      className:
        "-right-8 top-[160px] md:-right-2 md:top-[370px] lg:-right-8 xl:-right-18 lg:top-[360px] xl:top-[310px] badge-float-2",
      text: "Licensed & Experienced Doctors",
      textColor: "#102851",
      icon: "/images/icons/badge-icon3.png",
    },
    {
      className:
        "left-24 bottom-16 md:left-6 md:bottom-24 lg:-left-2 lg:bottom-28 badge-float-3 -ml-[150px]",
      text: "Prescription & Immediate Treatment",
      textColor: "#102851",
      icon: "/images/icons/badge-icon2.png",
    },
    {
      className:
        "right-2 bottom-6 md:right-4 md:bottom-8 lg:-right-4 lg:bottom-14 badge-float-4",
      text: "Safe for Children & Elderly",
      textColor: "#028650",
      icon: "/images/icons/badge-icon1.png",
    },
  ];
  return (
    <>
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: `url(${herobg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 mx-auto max-w-[1600px] px-4 md:px-10 lg:px-16 xl:px-24">
          {/* GRID LAYOUT */}
          <div className="grid items-center gap-5 md:gap-10 md:pt-10 md:grid-cols-[1.2fr_0.8fr]">
            {/* Doctor Image - TOP on mobile */}
            <div className="relative  order-2 md:order-2 w-fit mx-auto h-[320px] md:h-[590px] md:min-h-[590px]">
              <Image
                src="/images/doctor.webp"
                alt="Doctor providing home visit service"
                height={100}
                width={100}
                priority
                unoptimized
                className="object-contain h-full  w-auto shrink-0  object-bottom"
              />

              {/* Badges (desktop only) */}
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  className={badge.className}
                  text={badge.text}
                  textColor={badge.textColor}
                  icon={badge.icon}
                />
              ))}
            </div>

            {/* LEFT CONTENT */}
            <div className="order-1 md:order-1 flex flex-col gap-6  py-5">
              <h1
                className="capitalize leading-[120%]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-[#028650]">
                  Doctor On Call{" "}
                  <span className="italic text-[#004984] font-medium">In</span>
                </span>

                <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-[64px] italic font-medium text-[#004984]">
                  Dubai – A Qualified
                </span>

                <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-[64px] italic font-medium text-[#004984]">
                  Doctor At Your{" "}
                  <span className="text-[#028650] font-bold not-italic">
                    Home
                  </span>
                </span>

                <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-[#028650]">
                  In 30 Minutes
                </span>
              </h1>

              <p className=" max-w-[400px] xl:max-w-lg text-sm md:text-base text-slate-700 leading-relaxed">
                Skip crowded clinics and long waits. Book a qualified doctor to
                visit your home in Dubai today for immediate diagnosis,
                treatment, or prescription.
              </p>

              <div className="flex flex-col items-start gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="flex h-[45px] w-[260px] cursor-pointer items-center justify-center gap-[10px] rounded-[50px] border-r-[4px] border-b-[4px] border-[#004984] bg-[#028650] px-[40px] py-[16px] text-white transition-opacity hover:opacity-90"
                >
                  <span className="whitespace-nowrap text-[12px] tracking-[0.02em]">
                    Book an Appointment Today
                  </span>
                </button>

                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((n) => (
                      <div
                        key={n}
                        className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white"
                      >
                        <Image
                          src={`/images/patient-${n}.png`}
                          alt={`Happy patient ${n}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <span className="ml-1">
                    <span className="font-bold text-slate-900">2.8k+</span>{" "}
                    <span className="font-semibold">Patients have Trusted</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
              style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
              onClick={() => setShowModal(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute right-4 top-4 text-black cursor-pointer grid h-9 w-9 place-items-center rounded-full bg-slate-100 hover:bg-slate-200"
                  aria-label="Close modal"
                >
                  ×
                </button>

                <div className="flex flex-col items-center gap-3 text-center">
                  <h3 className="text-lg font-bold text-slate-900">
                    Contact Us
                  </h3>

                  <a
                    href="tel:+1234567890"
                    className="text-base font-semibold text-emerald-700 hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
type BadgeProps = {
  text: string;
  className: string;
  textColor?: string;
  icon?: string;
};

function Badge({ text, className, textColor = "#1e293b", icon }: BadgeProps) {
  return (
    <div
      style={{
        borderColor: textColor,
      }}
      className={`absolute  flex items-center border-l-2 border-b-4 gap-2 rounded-full bg-white/90 backdrop-blur-sm px-2 md:px-4 py-1 md:py-3 xl:py-5 text-[8px] md:text-xs xl:text-base font-semibold shadow-md ring-1 ring-black/3 whitespace-nowrap ${className}`}
    >
      {icon && (
        <div className="relative w-6 h-6 flex-shrink-0">
          <Image src={icon} alt="" fill className="object-contain" />
        </div>
      )}
      <span style={{ color: textColor }}>{text}</span>
    </div>
  );
}
