import Image from "next/image";

export default function MedicalHelps() {
  return (
    <section
      className="relative w-full bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/images/help-sectionbg.png')",
        backgroundColor: "#D9FFD9",
      }}
    >
      <div className="mx-auto max-w-[1600px] px-4 py-10 md:px-10 lg:px-16 xl:px-24">
        <div className="text-center max-w-[1310px] mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#028650] leading-tight">
            Need Medical Help At Home In{" "}
            <span style={{ color: "#028650" }}>Dubai</span>?
          </h2>
          <p
            className="mt-2 text-2xl lg:text-3xl md:text-base font-semibold italic"
            style={{ color: "#004984" }}
          >
            Skip The Hospital Hassle!
          </p>
          <p className="mt-3 text-sm md:text-base xl:text-xl text-slate-600 leading-relaxed max-w-[1390px] mx-auto">
            When sudden illness strikes, you want fast, reliable care without
            the stress of hospital visits. Our on-call doctors bring expert
            treatment directly to your door so you or your loved ones can
            recover in the comfort and safety of home.
          </p>
        </div>

        <div className="mt-8 mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          <Card title="Sudden Health Emergency" img="/images/img1.png" />

          <Card
            title="Need Health Monitoring"
            img="/images/img3.png"
            className=" lg:col-span-1  lg:row-span-2"
            tall
          />

          <Card title="Lab Testing at Home" img="/images/img4.png" />

          <Card title="Elderly Parent Care" img="/images/img2.png" />

          <Card title="Want to Avoid Travel" img="/images/img5.png" />
        </div>

        <p className="mx-auto mt-8 max-w-[1310px] text-center text-xs md:text-sm xl:text-xl text-slate-600 leading-relaxed">
          Don&apos;t wait in long lines or struggle to find urgent appointments.
          Our team is ready 24/7 to respond quickly to your call, arriving
          promptly with the tools and expertise needed to treat fevers,
          infections, injuries, and more, right in your living room.
        </p>
      </div>
    </section>
  );
}

function Card({
  title,
  img,
  className = "",
  tall = false,
}: {
  title: string;
  img: string;
  className?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-4xl shadow-md transition-all duration-300  hover:shadow-xl ${className}`}
    >
      {/* Image */}
      <div
        className={`relative w-full ${
          tall
            ? "h-[240px] sm:h-[300px] lg:h-[690px]"
            : "h-[240px] md:h-[300px] lg:h-[340px]"
        }`}
      >
        <Image
          src={img}
          alt={title}
          height={100}
          loading="lazy"
          width={100}
          className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      {/* Title */}
      <div className="absolute bottom-3 left-3 right-3 z-10">
        <p className="text-center text-base sm:text-lg lg:text-xl font-semibold text-white drop-shadow-md mb-4">
          {title}
        </p>
      </div>
    </div>
  );
}
