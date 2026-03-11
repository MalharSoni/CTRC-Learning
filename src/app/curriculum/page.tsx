import { navigation } from '@/lib/navigation'
import { CourseSection } from '@/components/curriculum/CourseSection'
import { Wrench, Cpu } from 'lucide-react'
import type { NavGroup } from '@/types/navigation'

// Determine if a lesson is a challenge based on title patterns
function isChallenge(title: string): boolean {
  const lower = title.toLowerCase()
  return (
    lower.includes('challenge') ||
    lower.startsWith('free spin') ||
    lower.startsWith('obstacle course') ||
    lower.startsWith('pickup relay') ||
    lower.startsWith('auton showdown') ||
    lower.startsWith('3d print keychain') ||
    lower.startsWith('cad battle') ||
    lower.startsWith('cad vs real') ||
    lower.startsWith('sumo bots') ||
    lower.startsWith('sack attack') ||
    lower.startsWith('ball sweep') ||
    lower.startsWith('2v2 matches')
  )
}

function extractLessons(children: NavItem[]) {
  return children
    .filter((c) => c.type === 'leaf')
    .map((c) => ({
      title: c.title,
      slug: c.slug,
      type: isChallenge(c.title) ? ('challenge' as const) : ('lesson' as const),
    }))
}

export default function CurriculumPage() {
  // Get the V5 Foundation Program section
  const foundationSection = navigation.find((s) => s.slug === 'foundation')
  const foundationUnits = (foundationSection?.children ?? []) as NavGroup[]

  // Get BattleBots from Projects
  const projectsSection = navigation.find((s) => s.slug === 'projects')
  const battlebots = (projectsSection?.children ?? []).find(
    (g) => g.type === 'group' && g.slug === 'projects/battlebots'
  ) as NavGroup | undefined

  // Count totals
  const totalFoundationLessons = foundationUnits.reduce(
    (sum, unit) => sum + unit.children.filter((c) => c.type === 'leaf').length,
    0
  )

  return (
    <div className="max-w-[860px] mx-auto px-6 py-10 pb-20">
      {/* Course Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-[44px] h-[44px] rounded-xl bg-[#54AC58] flex items-center justify-center">
            <Cpu size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-[24px] font-extrabold text-[#171717] tracking-tight leading-tight">
              V5 Foundation Program
            </h1>
          </div>
        </div>
        <p className="text-[14px] text-[#737373] leading-relaxed max-w-[640px] mt-2">
          Master the fundamentals of VEX V5 robotics from drivetrains to competition strategy.
          Work through 5 units covering mechanical design, programming, CAD, mechanisms, and
          match preparation.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <span className="text-[12px] font-semibold text-[#54AC58] bg-[#ECFDF5] px-3 py-1 rounded-full">
            {foundationUnits.length} Units
          </span>
          <span className="text-[12px] font-semibold text-[#737373] bg-[#F5F5F5] px-3 py-1 rounded-full">
            {totalFoundationLessons} Lessons &amp; Challenges
          </span>
        </div>
      </div>

      {/* Foundation Units */}
      <div className="space-y-3">
        {foundationUnits.map((unit, i) => (
          <CourseSection
            key={unit.slug}
            title={unit.title}
            lessons={extractLessons(unit.children)}
            defaultOpen={i === 0}
          />
        ))}
      </div>

      {/* BattleBots Section */}
      {battlebots && battlebots.children.length > 0 && (
        <div className="mt-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[40px] h-[40px] rounded-xl bg-[#EF4444] flex items-center justify-center">
              <Wrench size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold text-[#171717] tracking-tight">
                BattleBots Project
              </h2>
              <p className="text-[13px] text-[#737373]">
                Design and build your own combat robot
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <CourseSection
              title="BattleBots"
              lessons={extractLessons(battlebots.children)}
              defaultOpen={false}
            />
          </div>
        </div>
      )}

    </div>
  )
}
