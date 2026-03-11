import { Navbar } from '@/components/landing/Navbar'

export default function CurriculumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Auth bypassed — pending Azure AD setup
  // Once configured, uncomment:
  // const session = await auth()
  // if (!session) redirect('/auth/signin')

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
