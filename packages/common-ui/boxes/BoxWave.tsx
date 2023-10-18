import type { PropsWithChildren } from 'react'
import { memo } from 'react'
import { generateClasses } from 'common-utils'
import styles from './BoxWave.module.css'

type WaveBackgrounds = {
  first?: string
  second?: string
  third?: string
  box?: string
}
type Props = {
  size?: string
  backgroundColors?: WaveBackgrounds
}
function BoxWaveComponent({
  backgroundColors: backgroundColorsProp,
  children,
  size = '300px',
}: PropsWithChildren<Props>): JSX.Element {
  const backgroundColors = {
    box: 'rgba(255 255 255 / 40%)',
    first: 'rgba(0 170 255 / 40%)',
    second: 'rgba(255 255 0 / 10%)',
    third: 'rgba(0 170 255 / 40%)',
    ...(backgroundColorsProp || {}),
  }

  return (
    <div
      className={styles['box-wave']}
      style={{ width: size, background: backgroundColors.box }}
    >
      <div className={styles.contents}>{children}</div>
      <div
        className={generateClasses([styles.wave, styles.first])}
        style={{ background: backgroundColors.first }}
      />
      <div
        className={generateClasses([styles.wave, styles.second])}
        style={{ background: backgroundColors.second }}
      />
      <div
        className={generateClasses([styles.wave, styles.third])}
        style={{ background: backgroundColors.third }}
      />
    </div>
  )
}

export const BoxWave = memo(BoxWaveComponent)
