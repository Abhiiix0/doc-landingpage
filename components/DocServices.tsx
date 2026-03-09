"use client";

const services = [
  {
    icon: "/images/icons/circle1.png",
    title: "Doctor visits anywhere you need",
    description:
      "Experienced doctors come to your location for consultations, exams, or urgent care.",
  },
  {
    icon: "/images/icons/circle2.png",
    title: "Full Body health checkups",
    description:
      "Comprehensive medical assessments to monitor your overall health and catch issues early.",
  },
  {
    icon: "/images/icons/circle3.png",
    title: "Lab tests at your door",
    description:
      "Blood work and diagnostic tests collected at your location for maximum convenience.",
  },
  {
    icon: "/images/icons/circle4.png",
    title: "Physiotherapy sessions at home",
    description:
      "Personalised rehabilitation and therapy for pain relief, recovery, and improved mobility.",
  },
  {
    icon: "/images/icons/circle5.png",
    title: "Professional nursing care",
    description:
      "Skilled nurses provide wound care, injections, monitoring, and ongoing support.",
  },
  {
    icon: "/images/icons/circle6.png",
    title: "IV therapy on-site",
    description:
      "Hydration, vitamins, and medications administered safely at your home or office.",
  },
  {
    icon: "/images/icons/circle7.png",
    title: "Paediatrician visits",
    description:
      "Child-focused care for illnesses, checkups, and vaccinations in a familiar setting, and more on request.",
  },
  {
    icon: "/images/icons/circle8.png",
    title: "Additional services",
    description:
      "We offer a range of healthcare options to make well-being more accessible at home for everyone.",
  },
];

export default function DocServices() {
  return (
    <section
      aria-labelledby="home-healthcare-services"
      className="relative w-full bg-blue-200 overflow-hidden bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/services-bg.png')" }}
    >
      {" "}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-6 py-10 sm:py-14 lg:py-16">
        ```
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <header className="flex flex-col gap-3 lg:sticky lg:top-24">
            <h2
              id="home-healthcare-services"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#028650] leading-snug"
            >
              Healthcare Services{" "}
              <em className="font-normal text-[#004984]">We Offer</em>
              <br />
              <em className="font-normal text-[#004984]">At </em>
              <span className="font-extrabold text-[#028650] not-italic">
                Home
              </span>{" "}
              <em className="font-normal text-[#004984]">In Dubai</em>
            </h2>

            <p className="text-sm md:text-base lg:text-lg max-w-[500px] text-black font-medium mt-6">
              Get a qualified doctor to your home, office, or hotel fast. We
              deliver expert care, checkups, and tests at your convenience, all
              with complete privacy. We provide:
            </p>
          </header>

          <div className="flex flex-col gap-3 lg:mx-[40px] max-h-[700px] overflow-y-auto pr-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <article className="flex items-center gap-4 rounded-2xl px-4 py-3 shadow-sm bg-white hover:bg-[#BFF5D5] transition-all cursor-pointer">
      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10">
        <img
          src={icon}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-sm sm:text-base text-slate-800 leading-snug hover:text-[#028650] transition-colors">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
