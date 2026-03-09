"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How quickly can a doctor reach my home in Dubai?",
    answer:
      "Our doctors typically arrive within 30–60 minutes of booking confirmation. For urgent cases, we prioritize fast dispatch. You can also schedule a visit in advance at a time convenient for you — including late nights and public holidays.",
  },
  {
    id: 2,
    question: "Are your doctors qualified and licensed?",
    answer:
      "Yes, all our medical staff — including doctors, nurses, and technicians — are fully licensed and registered with the Dubai Health Authority (DHA). They meet international medical standards and are regularly assessed for quality assurance.",
  },
  {
    id: 3,
    question: "What conditions can be treated at home?",
    answer:
      "Our doctors can help with a wide range of concerns, from everyday illnesses like fever, flu, and infections to non-invasive care for food poisoning, minor injuries, migraines, blood pressure issues, diabetes monitoring, elderly support, and much more.",
  },
  {
    id: 4,
    question: "Is Doctor On Call available 24/7?",
    answer:
      "Yes! We operate 24 hours a day, 7 days a week — including weekends and public holidays. Whether it's late at night or early morning, our medical team is always ready to assist you.",
  },
  {
    id: 5,
    question: "Will the doctor provide a prescription?",
    answer:
      "Yes, our DHA-licensed doctors can issue valid prescriptions during home visits. Medications can also be arranged for delivery if needed, saving you an extra trip to the pharmacy.",
  },
  {
    id: 6,
    question: "How do I book an appointment?",
    answer:
      "Booking is simple — you can call us directly, send a WhatsApp message, or use our online booking form. Our team is available 24/7 to confirm your appointment and assign the right medical professional.",
  },
  {
    id: 7,
    question: "Is my personal and medical information kept confidential?",
    answer:
      "Absolutely. We strictly adhere to patient confidentiality standards. All your personal and medical information is securely stored and never shared with third parties without your explicit consent.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(3);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative w-full bg-[#004984] overflow-hidden min-h-[708px]  md:min-h-[748px] font-[Poppins]"
    >
      {/* Background Left */}
      <div className="absolute left-0 top-0 w-[500px] h-full opacity-25 pointer-events-none">
        <Image
          src="/images/faq-hexabg.png"
          alt=""
          fill
          className="object-cover object-left"
        />
      </div>

      {/* Background Right */}
      <div className="absolute right-0 top-0 w-[260px] h-full opacity-20 pointer-events-none">
        <Image
          src="/images/faq-hexabg.png"
          alt=""
          fill
          className="object-cover object-right"
        />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto flex items-end min-h-[748px]">
        {/* LEFT SIDE IMAGE */}
        <div className="hidden lg:block relative w-[487px] h-[748px] ml-[71px] shrink-0">
          {/* Dots */}
          <div className="absolute top-[42%] right-[48px] grid grid-cols-4 gap-[10px] z-[1]">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className="w-[7px] h-[7px] rounded-full bg-[#2DBF7E]"
              />
            ))}
          </div>

          {/* Doctor */}
          <div className="absolute inset-x-[20px] left-[80px] bottom-0 h-full z-[2]">
            <Image
              src="/images/faq-doctor.png"
              alt="Doctor consultation at home"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>

          {/* Person review */}
          <div className="absolute bottom-[188px] left-[12px] w-[210px] h-[66px] z-[4]">
            <Image
              src="/images/Person-faq.png"
              alt="Patient review"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-7 w-full lg:w-full max-w-[964px] px-6 md:px-10 pb-14 md:py-14">
          {/* Heading */}
          <header>
            <h2
              id="faq-heading"
              className="text-white text-center md:text-left font-bold text-[22px] md:text-[30px] lg:text-[38px] leading-tight"
            >
              Frequently Asked Questions
            </h2>
          </header>

          {/* FAQ LIST */}
          <div className="faq-scroll flex flex-col gap-3 max-h-[560px] overflow-y-auto pr-2">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <article
                  key={faq.id}
                  className={`bg-white shrink-0 rounded-[10px] overflow-hidden transition-all  border ${
                    isOpen ? "border-[#0097DC]" : "border-white"
                  }`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${faq.id}`}
                    className="flex w-full items-center justify-between text-left gap-3 px-5 py-4 cursor-pointer"
                  >
                    {/* Icon */}
                    <span
                      className={`flex items-center justify-center w-[26px] h-[26px] rounded-full transition ${
                        isOpen ? "bg-[#0097DC]" : "bg-[#E8F4FB]"
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M1 6H11"
                          stroke={isOpen ? "#fff" : "#004984"}
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        {!isOpen && (
                          <path
                            d="M6 1V11"
                            stroke="#004984"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        )}
                      </svg>
                    </span>

                    <span
                      className={`flex-1 text-[14px] transition ${
                        isOpen
                          ? "font-semibold text-[#0097DC]"
                          : "font-medium text-[#1A1A1A]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-${faq.id}`}
                    className={`transition-all overflow-hidden ${
                      isOpen ? "max-h-[200px]" : "max-h-0"
                    }`}
                  >
                    <p className="text-[13px] leading-[170%] text-[#555] px-5 pb-5 pl-[60px]">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scrollbar */}
      <style jsx>{`
        .faq-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .faq-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
