"use client";

import Image from "next/image";
import img from "../public/images/left1.jpg";
import img2 from "../public/images/left2.jpg";

const features = [
  {
    id: 1,
    title: "Patient-Focused Care -",
    description:
      "Our Doctors Understand Your Concerns Before Recommending Treatment. Each Patient Receives Tailored Healthcare.",
  },
  {
    id: 2,
    title: "Doctor Visits Without Delay -",
    description:
      "If You Need A Doctor, Don't Wait; It Might Make Things Worse. We Come Home When You Want Us To, So You Get Help Fast.",
  },
  {
    id: 3,
    title: "Care At Your Convenience -",
    description:
      "Our Services Are Available 24/7, Including Late Nights And Public Holidays, So You Don't Have To Step Out Or Change Your Routine.",
  },
  {
    id: 4,
    title: "Certified Doctors You Can Trust -",
    description:
      "All Our Medical Staff And Doctors Are Licensed And Registered With The Dubai Health Authority (DHA) And Meet International Medical Standards.",
  },
  {
    id: 5,
    title: "Proven Satisfaction Rate -",
    description:
      "Completed Over 35K+ Home Visits Across Dubai, Earning A 94% Patient Satisfaction Rate. Patients And Families Trust Us For Reliable, Professional Healthcare.",
  },
];

interface FeatureListProps {
  gap?: string;
  iconSize?: number;
}

const FeatureList = ({
  gap = "gap-5 md:gap-6",
  iconSize = 28,
}: FeatureListProps) => (
  <ul className={`flex flex-col ${gap}`}>
    {features.map((feature) => (
      <li key={feature.id} className="flex items-start gap-3 md:gap-4">
        <div
          className="relative flex-shrink-0 mt-[3px]"
          style={{ width: iconSize, height: iconSize }}
        >
          <Image
            src="/images/icons/tick-Icon.png"
            alt="tick-Icon"
            aria-hidden="true"
            height={iconSize}
            width={iconSize}
            className="object-contain"
          />
        </div>

        <p className="text-base md:text-lg lg:text-xl tracking-[0.02em] text-[#333]">
          <strong className="text-[#004984] font-bold lg:text-lg xl:text-[22px]">
            {feature.title}
          </strong>{" "}
          {feature.description}
        </p>
      </li>
    ))}
  </ul>
);

export default function WhyChooseUs() {
  return (
    <section
      className="bg-[#F5FFFD] px-4 md:px-10 lg:px-16 xl:px-24"
      aria-label="Why Choose Us section"
    >
      <div className="relative w-full max-w-[1600px] mx-auto py-12 md:py-16 lg:py-20 font-[Poppins] overflow-hidden">
        {/* ── MOBILE & TABLET (< lg) ── */}
        <div className="flex flex-col gap-8 lg:hidden">
          {/* Card */}
          <article className="bg-white rounded-[28px] px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-5 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
            <h2
              id="why-choose-us-mobile"
              className="text-[30px] sm:text-[36px] font-bold leading-[1.2]"
            >
              <span className="text-[#1A6B55] italic font-bold">Why </span>
              <span className="text-[#004984]">Choose Us!</span>
            </h2>

            <p className="text-base sm:text-lg tracking-[0.02em] text-[#444]">
              We ensure patients receive appropriate medical care with a doctor
              at home service without unnecessary complications.
            </p>

            <FeatureList iconSize={24} />
          </article>

          {/* Images – stacked, nicely overlapping */}
          <div
            className="relative mx-auto w-full max-w-[420px] h-[420px] sm:h-[480px]"
            aria-hidden="true"
          >
            {/* Top-left image */}
            <div className="absolute top-0 left-0 w-[52%] h-[55%] bg-white p-[6px] rounded-2xl shadow-md z-10">
              <Image
                src={img.src}
                alt="Doctor providing home healthcare visit"
                fill
                sizes="(max-width: 640px) 52vw, 218px"
                className="object-cover rounded-xl"
              />
            </div>

            {/* Bottom-right image */}
            <div className="absolute bottom-0 right-0 w-[72%] h-[72%] bg-white p-[6px] rounded-2xl shadow-md z-20">
              <Image
                src={img2.src}
                alt="Caring medical professional with patient at home"
                fill
                sizes="(max-width: 640px) 72vw, 302px"
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* ── DESKTOP (≥ lg) — original layout preserved ── */}
        <div className="hidden lg:flex items-center gap-10">
          {/* LEFT CARD */}
          <article className="w-[918px] h-fit bg-white rounded-[40px] px-10 py-11 flex flex-col gap-6 shadow-[0_4px_40px_rgba(0,0,0,0.06)] z-[2]">
            <h2
              id="why-choose-us"
              className="text-[42px] font-bold leading-[1.2]"
            >
              <span className="text-[#1A6B55] italic font-bold">Why </span>
              <span className="text-[#004984]">Choose Us!</span>
            </h2>

            <p className="lg:text-lg tracking-[0.02em] text-[#444]">
              We ensure patients receive appropriate medical care with a doctor
              at home service without unnecessary complications.
            </p>

            <FeatureList />
          </article>

          {/* RIGHT IMAGES */}
          <div className=" w-fit">
            <div className="h-[341px] w-[297px] bg-white p-2 border rounded-2xl">
              <Image
                src={img.src}
                alt="Doctor providing home healthcare visit"
                height={337}
                width={293}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="ml-34 mt-[-80px] md:mt-[-148px] h-[250px] w-[240px] xl:h-[350px] xl:w-[340px] 2xl:h-[505px] 2xl:w-[491px] z-10 relative bg-white p-2 border rounded-2xl">
              <Image
                src={img2.src}
                alt="Caring medical professional with patient at home"
                height={501}
                width={487}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
