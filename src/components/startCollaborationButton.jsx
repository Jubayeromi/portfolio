import React, { useState } from 'react'
import { Mail, Check } from 'lucide-react'

const StartCollaborationButton = ({
  email = 'you@gmail.com',
  label = 'Start collaboration',
  copiedLabel = 'Copied!',
  className = '',
}) => {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      className={`inline-flex cursor-pointer items-center gap-2 rounded-md md:px-6 py-1.5 px-2 md:py-3 font-medium tracking-wide text-neutral-900 uppercase transition-transform duration-150 active:scale-[0.97] ${className}`}
      style={{
        background:
          'radial-gradient(circle at 30% 30%, #f7ffe6 0%, #cdf564 35%, #8fe000 75%, #6fce00 100%)',
      }}
    >
      <span className='md:text-xl text-[14px] text-center'>{copied ? copiedLabel : label}</span>
      {copied ? (
        <Check className='md:w-4 md:h-4 w-3.5 '  strokeWidth={2.5}  />
      ) : (
        <Mail className='w-3.5 h-3.5 md:w-5 md:h-5' strokeWidth={2.5} />
      )}
    </button>
  )
}

export default StartCollaborationButton