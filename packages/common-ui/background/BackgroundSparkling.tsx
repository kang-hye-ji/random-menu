import { generateClasses, generateNumArray } from 'common-utils'
import { memo, useMemo } from 'react'
import styles from './BackgroundSparkling.module.css'

function BackgroundSparklingComponent(): JSX.Element {
  const sparkles = useMemo(() => generateNumArray({ length: 36 }), [])

  return (
    <>
      {sparkles.map((index) => (
        <div
          className={generateClasses([
            styles.sparkles,
            styles[`sparkle-${index}`],
          ])}
          key={`background-sparkling-sparkle-${index}`}
        />
      ))}
    </>
  )
}

export const BackgroundSparkling = memo(BackgroundSparklingComponent)
