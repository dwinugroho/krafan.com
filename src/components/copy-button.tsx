'use client'

import { CheckIcon, ClipboardIcon } from 'lucide-react'
import * as React from 'react'

import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CopyButtonProps extends ButtonProps {
  value: string
}

export async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value)
}

export function CopyButton({
  value,
  className,
  variant = 'ghost',
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <Button
      size='icon'
      variant={variant}
      className={cn(
        'copy-button relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:size-3',
        className
      )}
      onClick={() => {
        copyToClipboardWithMeta(value)
        setHasCopied(true)
      }}
      {...props}
    >
      <span className='sr-only'>Copy</span>
      {hasCopied ? <CheckIcon size={24} /> : <ClipboardIcon size={24} />}
    </Button>
  )
}
