// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { PropsWithChildren } from 'react'

export const ProgressProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height='4px'
        color='#F97316'
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}
