'use client'

import type { PropsWithChildren } from 'react'
import { RecoilRoot } from 'recoil'

const RecoilProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <RecoilRoot>{children}</RecoilRoot>
}

export default RecoilProvider
