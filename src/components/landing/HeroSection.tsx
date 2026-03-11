import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-8 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column — text */}
        <div className="max-w-[540px]">
          <h1 className="text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#171717] md:text-[48px] lg:text-[54px]">
            Your Robotics Journey{" "}
            <span className="text-[#FFD600]">Starts Here</span>
          </h1>

          <p className="mt-6 text-[17px] leading-[1.7] text-[#525252]">
            An open-source curriculum to learn everything you need to build,
            program, and compete with VEX V5 robots. Supported by Caution Tape
            Robotics Club.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/curriculum"
              className="inline-flex h-[48px] items-center rounded-[8px] bg-[#FFD600] px-8 text-[15px] font-semibold text-[#171717] shadow-sm transition-all hover:bg-[#E6C100] active:scale-[0.97]"
            >
              View Full Curriculum
            </Link>
          </div>

          <p className="mt-5 text-[13px] text-[#A3A3A3]">
            Free and open source. No account required to browse.
          </p>
        </div>

        {/* Right column — decorative geometric composition */}
        <div className="hidden lg:flex lg:justify-end">
          <div className="relative h-[380px] w-[440px]">
            {/* Background grid of subtle squares */}
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-2">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-[6px] bg-[#F5F5F5]"
                />
              ))}
            </div>

            {/* Accent blocks — isometric feel representing robot parts */}
            <div className="absolute left-[40px] top-[30px] h-[100px] w-[100px] rounded-[12px] bg-[#FFD600] opacity-90 shadow-lg" />
            <div className="absolute left-[160px] top-[10px] h-[70px] w-[70px] rounded-[10px] bg-[#FFD600] opacity-60" />
            <div className="absolute left-[260px] top-[60px] h-[120px] w-[120px] rounded-[14px] bg-[#FFF8D6] border border-[#FFD600]/20" />
            <div className="absolute left-[80px] top-[160px] h-[80px] w-[160px] rounded-[10px] bg-[#171717] opacity-90 shadow-md" />
            <div className="absolute left-[270px] top-[200px] h-[90px] w-[90px] rounded-[12px] bg-[#FFD600] opacity-40" />
            <div className="absolute left-[20px] top-[270px] h-[60px] w-[140px] rounded-[8px] bg-[#FFF8D6] border border-[#FFD600]/15" />
            <div className="absolute left-[180px] top-[290px] h-[50px] w-[50px] rounded-[50%] bg-[#FFD600] opacity-70" />
            <div className="absolute left-[300px] top-[310px] h-[40px] w-[100px] rounded-[6px] bg-[#D4D4D4] opacity-50" />

            {/* Connecting lines */}
            <div className="absolute left-[90px] top-[130px] h-[30px] w-[2px] bg-[#FFD600] opacity-30" />
            <div className="absolute left-[320px] top-[180px] h-[2px] w-[30px] bg-[#FFD600] opacity-30" />
          </div>
        </div>

        {/* Mobile decorative bar */}
        <div className="flex gap-2 lg:hidden">
          <div className="h-[6px] flex-1 rounded-full bg-[#FFD600] opacity-80" />
          <div className="h-[6px] w-[60px] rounded-full bg-[#FFD600] opacity-40" />
          <div className="h-[6px] w-[40px] rounded-full bg-[#171717] opacity-20" />
        </div>
      </div>
    </section>
  );
}
