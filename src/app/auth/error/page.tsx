import Link from 'next/link'
import { ShieldAlert } from 'lucide-react'

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F5F5] font-sans">
      <div className="w-full max-w-[400px] rounded-[10px] border border-[#D4D4D4] bg-white p-8 shadow-sm">
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEF2F2]">
            <ShieldAlert size={24} className="text-[#DC2626]" />
          </div>
          <h1 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#171717]">
            Access Denied
          </h1>
          <p className="text-center text-[13px] font-normal text-[#737373]">
            Your account is not authorized to access CTRC Learning. Only{' '}
            <span className="font-semibold text-[#171717]">@cautiontape.ca</span> email addresses
            are allowed.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="inline-flex h-9 w-full items-center justify-center rounded-lg border border-[#D4D4D4] bg-white text-sm font-medium text-[#171717] transition-colors hover:bg-[#F5F5F5]"
          >
            Back to Home
          </Link>
          <Link
            href="/auth/signin"
            className="inline-flex h-9 w-full items-center justify-center rounded-lg text-sm font-medium text-[#737373] transition-colors hover:bg-[#F5F5F5] hover:text-[#171717]"
          >
            Try a Different Account
          </Link>
        </div>
      </div>
    </div>
  )
}
