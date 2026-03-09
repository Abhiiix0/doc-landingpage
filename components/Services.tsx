"use client";

import Image from "next/image";

export default function Services() {
  return (
    <section
      aria-labelledby="home-healthcare-services"
      className="w-full py-16 px-6 bg-[#DAF1FF] font-[Poppins]"
    >
      {/* Heading */}
      <header className="max-w-[1302px] mx-auto text-center mb-8">
        <h2
          id="home-healthcare-services"
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
        >
          <span className="italic text-black font-normal">Trusted </span>

          <span className="text-[#004984] not-italic font-bold">
            Home Healthcare Services
          </span>

          <span className="italic font-normal text-black">
            {" "}
            In Dubai&apos;s
          </span>

          <br />

          <span className="italic font-normal text-black">Major Locations</span>
        </h2>

        <p className="mx-auto mb-2 max-w-[1200px] text-[18px] md:text-[20px] leading-[160%] tracking-[0.02em] text-[#333]">
          We provide DHA-licensed, patient-centered healthcare services
          throughout Dubai&apos;s premier residential areas. Our medical team
          offers prompt, discreet, and professional care at your home.
        </p>

        <p className="font-semibold text-[18px] md:text-[20px] leading-[160%] tracking-[0.02em] text-[#333]">
          We serve residents in the following areas:
        </p>
      </header>

      {/* Map Image */}
      <div className="max-w-[1642px] mx-auto mb-10">
        <div
          className="relative w-full overflow-hidden rounded-2xl md:rounded-[30px]"
          style={{ aspectRatio: "1640 / 704" }}
        >
          <Image
            src="/images/trusted-servicesbg.png"
            alt="Dubai home healthcare service coverage map"
            fill
            priority
            sizes="(max-width:768px) 100vw, 1640px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-[1300px] mx-auto text-center text-lg lg:text-xl text-[#333] leading-[160%] tracking-[0.02em]">
        <p className="mb-6">
          Our DHA-certified doctors and nurses deliver hospital-grade care in
          the comfort and privacy of your home, regardless of your residence
          type.
        </p>

        <p>
          We offer transparent pricing, multilingual staff, and 24/7 appointment
          availability to ensure accessible, reliable, and fully compliant
          healthcare services throughout Dubai.
        </p>
      </div>
    </section>
  );
}
