import { generateClasses, generateNumArray } from 'common-utils'
import { memo, useMemo } from 'react'
import styles from './BackgroundSparkling.module.css'

function BackgroundSparklingComponent(): JSX.Element {
  const sparkles = useMemo(() => generateNumArray({ length: 36 }), [])

  return (
    <>
      {sparkles.map((value) => (
        <div
          className={generateClasses([
            styles.sparkles,
            styles[`sparkle-${value}`],
          ])}
          key={`background-sparkling-sparkle-${value}`}
        />
      ))}
    </>
  )
}

export const BackgroundSparkling = memo(BackgroundSparklingComponent)
