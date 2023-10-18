'use client'

import type { PropsWithChildren } from 'react'
import { SWRConfig } from 'swr'

const SwrProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <SWRConfig value={{ revalidateOnFocus: false }}>{children}</SWRConfig>
}

export default SwrProvider
