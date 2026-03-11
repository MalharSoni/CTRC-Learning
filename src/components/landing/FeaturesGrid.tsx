import Link from "next/link";
import {
  BookOpen,
  Wrench,
  Trophy,
  Cpu,
  Bot,
  PenTool,
  Code,
  Target,
  Cog,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ───────────────────────────────────────────
   "How it works" — 3 steps
   ─────────────────────────────────────────── */

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: BookOpen,
    title: "Learn It",
    description:
      "Study concepts through guided lessons, visual references, and real-world examples from the VEX V5 ecosystem.",
  },
  {
    icon: Wrench,
    title: "Build It",
    description:
      "Apply knowledge by building real robots with VEX V5 parts. Hands-on projects from basic assembly to advanced mechanisms.",
  },
  {
    icon: Trophy,
    title: "Prove It",
    description:
      "Test your skills in field challenges and 2v2 competitions. Demonstrate mastery through real performance.",
  },
];

/* ───────────────────────────────────────────
   Course paths grid
   ─────────────────────────────────────────── */

interface CoursePath {
  icon: LucideIcon;
  title: string;
  meta: string;
  href: string;
}

const coursePaths: CoursePath[] = [
  {
    icon: Cpu,
    title: "V5 Foundation",
    meta: "5 units",
    href: "/curriculum",
  },
  {
    icon: Bot,
    title: "BattleBots Project",
    meta: "Capstone",
    href: "/curriculum#battlebots",
  },
  {
    icon: PenTool,
    title: "Design Handbook",
    meta: "Reference",
    href: "/curriculum#design",
  },
  {
    icon: Code,
    title: "Programming",
    meta: "C++ / PROS",
    href: "/curriculum#programming",
  },
  {
    icon: Cog,
    title: "CAD Design",
    meta: "Onshape",
    href: "/curriculum#cad",
  },
  {
    icon: Target,
    title: "Competition Strategy",
    meta: "Match Ready",
    href: "/curriculum#competition",
  },
];

/* ───────────────────────────────────────────
   Component
   ─────────────────────────────────────────── */

export function FeaturesGrid() {
  return (
    <>
      {/* How it works */}
      <section className="bg-[#F5F5F5] px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.12em] text-[#FFD600]">
            How it works
          </p>
          <h2 className="mt-3 text-center text-[28px] font-extrabold tracking-[-0.02em] text-[#171717] md:text-[32px]">
            Learn by doing, not watching
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-center text-[15px] leading-[1.7] text-[#737373]">
            Every module follows a three-step process that keeps students
            engaged and building real skills from day one.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-[10px] border border-[#E5E5E5] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,.06)]"
              >
                {/* Step number */}
                <span className="absolute right-5 top-5 text-[13px] font-bold text-[#D4D4D4]">
                  0{i + 1}
                </span>

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#FFF8D6] text-[#FFD600]">
                  <step.icon size={22} strokeWidth={2} />
                </div>

                <h3 className="text-[17px] font-bold text-[#171717]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-[#737373]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course paths */}
      <section id="about" className="bg-white px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.12em] text-[#FFD600]">
            Curriculum
          </p>
          <h2 className="mt-3 text-center text-[28px] font-extrabold tracking-[-0.02em] text-[#171717] md:text-[32px]">
            Explore learning paths
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-center text-[15px] leading-[1.7] text-[#737373]">
            Six focused tracks covering every aspect of competitive VEX V5
            robotics.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coursePaths.map((course) => (
              <Link
                key={course.title}
                href={course.href}
                className="group flex items-center gap-4 rounded-[10px] border border-[#E5E5E5] bg-white p-5 transition-all duration-150 hover:border-[#FFD600]/40 hover:shadow-[0_4px_12px_rgba(0,0,0,.08)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[#F5F5F5] text-[#737373] transition-colors group-hover:bg-[#FFF8D6] group-hover:text-[#FFD600]">
                  <course.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#171717]">
                    {course.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] font-medium text-[#A3A3A3]">
                    {course.meta}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
