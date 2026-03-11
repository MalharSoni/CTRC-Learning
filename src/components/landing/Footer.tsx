import Link from "next/link";

const curriculumLinks = [
  { label: "V5 Foundation", href: "/curriculum" },
  { label: "BattleBots Project", href: "/curriculum#battlebots" },
  { label: "Design Handbook", href: "/curriculum#design" },
  { label: "Programming", href: "/curriculum#programming" },
  { label: "CAD Design", href: "/curriculum#cad" },
];

const resourceLinks = [
  { label: "Competition Strategy", href: "/curriculum#competition" },
  { label: "Student Login", href: "/auth/signin" },
  {
    label: "GitHub",
    href: "https://github.com/caution-tape-robotics/ctrc-learning",
  },
  {
    label: "Educator's Guide",
    href: "https://github.com/caution-tape-robotics/ctrc-learning#educators-guide",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#171717] px-6 pt-16 pb-10 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-[28px] w-[28px] items-center justify-center rounded-[5px] bg-[#FFD600] text-[13px] font-extrabold text-[#171717]">
                C
              </span>
              <span className="text-[16px] font-bold text-white">
                CTRC Learning
              </span>
            </div>
            <p className="mt-4 max-w-[280px] text-[13px] leading-[1.7] text-[#A3A3A3]">
              An open-source robotics curriculum built by the Caution Tape
              Robotics Club. Learn to build, program, and compete with VEX V5.
            </p>
          </div>

          {/* Curriculum */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#737373]">
              Curriculum
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {curriculumLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#A3A3A3] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#737373]">
              Resources
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#A3A3A3] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-[#2E2E2E] pt-6">
          <p className="text-[12px] text-[#737373]">
            &copy; 2026 Caution Tape Robotics Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
