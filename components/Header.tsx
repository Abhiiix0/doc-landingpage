import Image from "next/image";

export default function Header() {
  return (
    <header className=" top-0 z-50 w-full py-0 border-b border-gray-200 bg-white">
      <div className="mx-auto  flex max-w-[1600px] items-center justify-between px-4 py-6 md:px-10 lg:px-16 xl:px-24">
        <div className="relative h-8 w-32 sm:w-48">
          <Image
            src="/images/cmdLogo.png"
            alt="Call My Doctor Logo"
            fill
            priority
            className="object-contain object-left"
          />
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden items-center gap-1.5 md:flex">
            <div className="relative h-6 w-6 flex-shrink-0">
              <Image
                src="/images/LocationIcon.png"
                alt="Clinic Location"
                fill
                className="object-contain"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/MxLz1SrRtGw1Ax8p9"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden whitespace-nowrap text-[18px] font-normal leading-none tracking-[0.02em] capitalize text-black transition-colors hover:text-green-600 lg:inline-block"
              aria-label="Open clinic location in Google Maps"
            >
              AB Center, Sheikh Zayed Road | Al Barsha 1, Dubai, UAE
            </a>

            <a
              href="https://maps.app.goo.gl/MxLz1SrRtGw1Ax8p9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-normal text-black lg:hidden"
              aria-label="Open clinic location in Google Maps"
            >
              Dubai, UAE
            </a>
          </div>

          <span className="hidden h-4 w-px bg-slate-300 sm:block" />

          <a
            href="tel:+97144580700"
            aria-label="Call Call My Doctor clinic"
            className="inline-flex items-center gap-1.5 text-[14px] font-normal leading-none tracking-[0.02em] capitalize text-slate-800 transition-colors hover:text-emerald-600 sm:text-[18px]"
          >
            <div className="relative h-4 w-4 md:h-6 md:w-6 flex-shrink-0">
              <Image
                src="/images/icon_call.svg"
                alt="Call icon"
                fill
                className="object-contain "
              />
            </div>
            <span className="whitespace-nowrap">+971 4 458 0700</span>
          </a>
        </div>
      </div>
    </header>
  );
}
