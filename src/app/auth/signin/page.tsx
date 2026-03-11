import { signIn } from '../../../../auth'
import { Button } from '@/components/ui/button'
import { ShieldCheck } from 'lucide-react'

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F5F5]">
      <div className="w-full max-w-[400px] rounded-[10px] border border-[#D4D4D4] bg-white p-8 shadow-sm">
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD600]/10">
            <ShieldCheck size={24} className="text-[#FFD600]" />
          </div>
          <h1
            className="text-[22px] font-extrabold tracking-[-0.02em] text-[#171717]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            CTRC Learning
          </h1>
          <p className="text-center text-[13px] font-normal text-[#737373]">
            Sign in to access the curriculum and training materials.
          </p>
        </div>

        <form
          action={async () => {
            'use server'
            await signIn('microsoft-entra-id', { redirectTo: '/curriculum' })
          }}
        >
          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#FFD600] text-[#171717] hover:bg-[#E6C100] active:scale-[0.97]"
          >
            Sign in with Microsoft
          </Button>
        </form>

        <a
          href="https://malharsoni.github.io/CTRC-Learning/"
          className="mt-4 flex w-full items-center justify-center rounded-lg border border-[#D4D4D4] bg-white py-2.5 text-[13px] font-medium text-[#525252] transition-colors hover:bg-[#F5F5F5] hover:text-[#171717]"
        >
          Browse without signing in
        </a>

        <div className="mt-6 rounded-[6px] border border-[#D4D4D4] bg-[#F5F5F5] px-4 py-3">
          <p className="text-center text-[11.5px] font-medium text-[#737373]">
            Only <span className="font-semibold text-[#171717]">@cautiontape.ca</span> accounts
            are permitted to sign in.
          </p>
        </div>
      </div>
    </div>
  )
}
