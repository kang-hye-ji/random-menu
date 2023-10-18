'use client'
import { memo, useCallback, useEffect, useState } from 'react'
import { generateClasses } from 'common-utils'
import styles from './SpinnerText.module.css'

type Props = {
  items: string[]
}

function SpinnerTextComponent({ items }: Props): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const getClassName = useCallback(
    (index: number) => {
      if (index === activeIndex) {
        return generateClasses([styles['is-visible'], 'rm-push-in'])
      }
      if (activeIndex === 0) {
        return index === items.length - 1 ? 'rm-push-out' : ''
      }
      return index === activeIndex - 1 ? 'rm-push-out' : ''
    },
    [activeIndex, items.length],
  )

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0))
    }, 300)
  }, [items.length])

  return (
    <div className={generateClasses([styles['words-wrapper'], 'rm-center'])}>
      {items.map((text, index) => {
        return (
          <span className={getClassName(index)} key={text}>
            {text}
          </span>
        )
      })}
    </div>
  )
}

export const SpinnerText = memo(SpinnerTextComponent)
