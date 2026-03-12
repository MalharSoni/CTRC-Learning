/**
 * Signup Form Component - Aceternity UI
 * Adapted for CTRC Learning
 *
 * Customizable signup form with smooth animations and CTRC design system
 * Includes social auth buttons and form validation support
 *
 * Dependencies:
 * - framer-motion
 * - @phosphor-icons/react
 *
 * Usage:
 * ```tsx
 * import { SignupForm, Input, Label } from './signup-form'
 *
 * <SignupForm
 *   onSubmit={(data) => console.log(data)}
 *   title="Join CTRC Learning"
 *   subtitle="Start your robotics journey today"
 * />
 * ```
 */

"use client"

import React from "react"
import { motion } from "framer-motion"
import { GithubLogo, GoogleLogo, DiscordLogo } from "@phosphor-icons/react"

// Utility function for conditional classes
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

// Input component with CTRC styling
export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <motion.input
      whileFocus={{ scale: 1.01 }}
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-[rgba(255,255,255,0.08)] bg-[#0a0a0a] px-3 py-2 text-sm text-white",
        "placeholder:text-[#718096] focus:outline-none focus:ring-2 focus:ring-[#00ff88] focus:border-transparent",
        "disabled:cursor-not-allowed disabled:opacity-50 transition-all",
        "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = "Input"

// Label component with CTRC styling
export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium text-[#a0aec0] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
})

Label.displayName = "Label"

// Bottom gradient effect for buttons
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#00cc6a] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

// Label + Input container
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  )
}

// Social button component
const SocialButton = ({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}) => {
  return (
    <button
      className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-[#141414] border border-[rgba(255,255,255,0.08)] px-4 font-medium text-white hover:bg-[#1a1a1a] transition-colors"
      type="button"
      onClick={onClick}
    >
      <div className="text-[#a0aec0] group-hover/btn:text-[#00ff88] transition-colors">
        {icon}
      </div>
      <span className="text-sm text-[#a0aec0] group-hover/btn:text-white transition-colors">
        {label}
      </span>
      <BottomGradient />
    </button>
  )
}

// Main signup form component
export interface SignupFormProps {
  title?: string
  subtitle?: string
  onSubmit?: (data: FormData) => void
  showSocialAuth?: boolean
  fields?: Array<{
    id: string
    label: string
    type: string
    placeholder: string
    required?: boolean
  }>
}

export function SignupForm({
  title = "Join CTRC Learning",
  subtitle = "Start your robotics journey today",
  onSubmit,
  showSocialAuth = true,
  fields,
}: SignupFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit?.(formData)
  }

  const defaultFields = fields || [
    {
      id: "firstname",
      label: "First name",
      type: "text",
      placeholder: "Tyler",
      required: true,
    },
    {
      id: "lastname",
      label: "Last name",
      type: "text",
      placeholder: "Durden",
      required: true,
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "hello@ctrc.ca",
      required: true,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "••••••••",
      required: true,
    },
  ]

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-[#0a0a0a] border border-[rgba(255,255,255,0.08)] p-4 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-white">
          {title}
        </h2>
        <p className="mt-2 max-w-sm text-sm text-[#a0aec0]">
          {subtitle}
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          {/* Name fields in a row */}
          {defaultFields.slice(0, 2).length === 2 && (
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              {defaultFields.slice(0, 2).map((field) => (
                <LabelInputContainer key={field.id}>
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    type={field.type}
                    required={field.required}
                  />
                </LabelInputContainer>
              ))}
            </div>
          )}

          {/* Other fields */}
          {defaultFields.slice(2).map((field) => (
            <LabelInputContainer className="mb-4" key={field.id}>
              <Label htmlFor={field.id}>{field.label}</Label>
              <Input
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                type={field.type}
                required={field.required}
              />
            </LabelInputContainer>
          ))}

          {/* Submit button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-[#00ff88] to-[#00cc6a] font-semibold text-[#0a0a0a] shadow-[0px_1px_0px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_0px_0px_rgba(0,0,0,0.1)_inset] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-shadow"
            type="submit"
          >
            Sign up →
            <BottomGradient />
          </motion.button>

          {/* Divider */}
          {showSocialAuth && (
            <>
              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent" />

              {/* Social auth buttons */}
              <div className="flex flex-col space-y-4">
                <SocialButton
                  icon={<GithubLogo size={16} weight="bold" />}
                  label="GitHub"
                />
                <SocialButton
                  icon={<GoogleLogo size={16} weight="bold" />}
                  label="Google"
                />
                <SocialButton
                  icon={<DiscordLogo size={16} weight="bold" />}
                  label="Discord"
                />
              </div>
            </>
          )}
        </form>
      </motion.div>
    </div>
  )
}

// Export all components
export default SignupForm
