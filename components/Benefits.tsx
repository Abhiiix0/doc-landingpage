import Image from "next/image";

const steps = [
  {
    icon: "/images/icons/phone-icon.png",
    alt: "Call Doctor On Call Dubai",
    description: "Call us toll-free at ........\nor WhatsApp on ........",
  },
  {
    icon: "/images/icons/locationWhite.png",
    alt: "Share your location for doctor home visit",
    description: "Tell us your details\nand what service you want.",
  },
  {
    icon: "/images/icons/heart-hand-white.png",
    alt: "Doctor home visit service in Dubai",
    description: "We'll come to you the\nsame day, whenever you say.",
  },
];

export default function Benefits() {
  return (
    <section
      className="bg-[#E9F3FF] py-6 md:py-10 px-0 md:px-4"
      aria-labelledby="doctor-on-call-process"
    >
      <div
        className="relative w-auto max-w-[1600px] rounded-2xl mx-4 md:mx-auto overflow-hidden bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/images/HowDoesWorkBG.png')" }}
      >
        {/* Wavy Lines — Left */}
        <svg
          className="absolute left-0 top-0 h-full opacity-20 pointer-events-none hidden md:block"
          width="160"
          viewBox="0 0 160 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[0, 15, 30, 45, 60, 75, 90].map((offset, i) => (
            <path
              key={i}
              d={`M${-60 + offset} 0 Q${30 + offset} 100 ${-60 + offset} 200 Q${
                30 + offset
              } 300 ${-60 + offset} 400`}
              stroke="#4fc3f7"
              strokeWidth="1.2"
              fill="none"
            />
          ))}
        </svg>

        {/* Wavy Lines — Right */}
        <svg
          className="absolute right-0 top-0 h-full opacity-20 pointer-events-none hidden md:block"
          width="160"
          viewBox="0 0 160 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[0, 15, 30, 45, 60, 75, 90].map((offset, i) => (
            <path
              key={i}
              d={`M${220 - offset} 0 Q${130 - offset} 100 ${
                220 - offset
              } 200 Q${130 - offset} 300 ${220 - offset} 400`}
              stroke="#4fc3f7"
              strokeWidth="1.2"
              fill="none"
            />
          ))}
        </svg>

        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Title */}
          <header className="text-center max-w-[1100px] mx-auto">
            <h2
              id="doctor-on-call-process"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-emerald-400 italic leading-snug"
            >
              How Does A{" "}
              <span className="font-extrabold text-white not-italic">
                Doctor On Call
              </span>{" "}
              In Dubai Work?
            </h2>

            <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed">
              We offer quick and seamless checkups, treatments, and blood tests
              at home, all at competitive prices with no additional fees,
              because earning your trust is our primary goal.
            </p>
          </header>

          {/* Steps */}
          <div
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 justify-items-center"
            role="list"
          >
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center pb-8">
          <button
            className="px-8 md:px-10 py-3 max-w-[200px] md:max-w-[300px] w-full md:py-3.5 text-sm md:text-base bg-white font-semibold rounded-full hover:bg-gray-200 transition"
            style={{ color: "#004984" }}
            aria-label="Book a doctor home visit in Dubai"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  icon,
  alt,
  description,
}: {
  icon: string;
  alt: string;
  description: string;
}) {
  return (
    <article
      className="flex flex-col items-center text-center gap-4 max-w-[220px]"
      role="listitem"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px]">
        <Image
          src={icon}
          alt={alt}
          width={90}
          height={90}
          loading="lazy"
          className="object-contain hover:scale-110 transition-transform duration-200"
        />
      </div>

      {/* Description */}
      <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </article>
  );
}
