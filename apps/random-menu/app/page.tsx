'use client'
import { BackgroundBubbles, BackgroundSparkling } from 'common-ui'
import { generateClasses } from 'common-utils'
import { useEffect } from 'react'
import { BoxTypes } from '@/components/main'
import styles from './page.module.css'

const Page = (): JSX.Element => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(() => {
      // request permission
    })
  }, [])

  return (
    <main className={styles.main}>
      <div className={generateClasses([styles.wrapper, 'rm-center'])}>
        <h1 className={styles.title}>CAN&apos;T CHOOSE A MENU?</h1>
        <h2 className={styles['sub-title']}>CLICK TYPE!</h2>
        <BoxTypes />
      </div>
      <BackgroundSparkling />
      <BackgroundBubbles bubbleCounts={20} />
    </main>
  )
}

export default Page
