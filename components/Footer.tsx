import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Patients Rights and Responsibility", href: "/patients-rights" },
  { label: "Ethics and Compliance", href: "/ethics" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
];

const services = [
  { label: "Doctor on Call", href: "/services/doctor-on-call" },
  { label: "Blood Test at Home", href: "/services/blood-test" },
  { label: "Vitamin Infused Therapy", href: "/services/vitamin-therapy" },
  { label: "IV Therapy", href: "/services/iv-therapy" },
];

const socials = [
  { icon: "/images/icons/linkedIn.png", alt: "LinkedIn", href: "#" },
  { icon: "/images/icons/fb-Vector.png", alt: "Facebook", href: "#" },
  { icon: "/images/icons/insta-vector.png", alt: "Instagram", href: "#" },
  { icon: "/images/icons/tik-tok-vector.png", alt: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#004984",
        backgroundImage: "url('/images/footer-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 md:px-10 lg:px-16 xl:px-24 pt-12 sm:pt-16 lg:pt-20 pb-10 flex flex-wrap gap-8 lg:gap-12 items-start">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Link href="/" aria-label="Call My Doctor Home">
            <div className="relative h-12 w-48">
              <Image
                src="/images/CallMyDoctor-White 1.png"
                alt="Call My Doctor"
                fill
                priority
                sizes="192px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          <p className="text-sm lg:text-base font-medium leading-relaxed text-white/85 max-w-[440px]">
            Your trusted doctor on call in Dubai. Expert, private and convenient
            home healthcare, 24/7. Your well-being, our priority.
          </p>

          <div className="flex items-center gap-5 mt-1">
            {socials.map((s) => (
              <Link
                key={s.alt}
                href={s.href}
                aria-label={s.alt}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-6 h-6 lg:h-10 lg:w-10 bg-blue-500 rounded-full opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
              >
                <Image
                  src={s.icon}
                  alt={s.alt}
                  fill
                  sizes="40px"
                  className="object-contain p-2"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links" className="flex flex-col gap-4">
          <h3 className="text-base sm:text-lg font-bold text-white pb-2">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm lg:text-base text-white/80 hover:text-white transition-colors leading-snug"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services" className="flex flex-col gap-4">
          <h3 className="text-base sm:text-lg font-bold text-white pb-2">
            Our Services
          </h3>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  className="text-sm lg:text-base text-white/80 hover:text-white transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base sm:text-lg font-bold text-white pb-2">
            Get in Touch
          </h3>

          <address className="not-italic flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="relative w-5 h-5 flex-shrink-0 mt-0.5">
                <Image
                  src="/images/icons/location-vector.png"
                  alt="Office location"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>

              <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed">
                Office 102, Techno IT Park, Eksar Village,
                <br />
                Borivali West, Mumbai - 400091
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-5 h-5 flex-shrink-0">
                <Image
                  src="/images/icons/call-vector.png"
                  alt="Phone"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>

              <a
                href="tel:+97145490700"
                className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors"
              >
                +971 4 549 0700 / Toll Free: 800 99387
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-5 h-5 flex-shrink-0">
                <Image
                  src="/images/icons/email-vector.png"
                  alt="Email"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>

              <a
                href="mailto:info@callmydoctor.ae"
                className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors"
              >
                info@callmydoctor.ae
              </a>
            </div>

            <div className="relative w-44 h-14 mt-1">
              <Image
                src="/images/icons/DHA-Logo 1.png"
                alt="Licensed by Dubai Health Authority"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </div>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/75 py-5">
        <p className="text-xs sm:text-sm lg:text-lg text-white text-center leading-relaxed">
          © {new Date().getFullYear()} Call My Doctor Health Care LLC. All
          rights reserved. &nbsp;|&nbsp;
          <Link
            href="/privacy-policy"
            className="hover:underline whitespace-nowrap underline-offset-2"
          >
            Privacy Policy
          </Link>
          &nbsp;|&nbsp;
          <Link href="/terms" className="hover:underline underline-offset-2">
            Terms &amp; Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
}
