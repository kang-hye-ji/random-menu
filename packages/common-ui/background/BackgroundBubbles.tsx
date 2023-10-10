'use client'

import {
  generateClasses,
  generateNumArray,
  generateRandomNumber,
} from 'common-utils'
import { memo, useCallback, useEffect, useMemo, useRef } from 'react'
import styles from './BackgroundBubbles.module.css'

type Props = {
  bubbleCounts?: number
}
function BackgroundBubblesComponent({ bubbleCounts = 30 }: Props): JSX.Element {
  const bubbleElements = useRef<HTMLDivElement[]>([])

  const bubbles = useMemo(
    () => generateNumArray({ length: bubbleCounts }),
    [bubbleCounts],
  )

  const setRef = useCallback(
    (element: HTMLDivElement | null, value: number) => {
      if (element) {
        bubbleElements.current[value - 1] = element
      }
    },
    [],
  )

  const random = useCallback(
    (max: number): number => generateRandomNumber({ max }),
    [],
  )

  const registerKeyframes = useCallback((): void => {
    const styleSheet = document.createElement('style')
    document.head.appendChild(styleSheet)

    bubbles.forEach((value) => {
      styleSheet.sheet?.insertRule(`@keyframes move-${value}{
        ${random(30) + 30}%{
          transform: translate(${random(25) - 25}vw, ${
            random(25) - 25
          }vh) scale(${(random(10) + 10) * 0.1})
        }
      }`)
    })
  }, [bubbles, random])

  const setBubblesStyles = useCallback((): void => {
    bubbleElements.current.forEach((bubbleElement, index) => {
      bubbleElement.style.opacity = String(random(100) * 0.01)
      bubbleElement.style.left = `${random(100)}vw`
      bubbleElement.style.top = `${random(100)}vh`
      bubbleElement.style.transform = `translate(0,0) scale(${
        (random(100) + 5) * 0.01
      })`
      bubbleElement.style.animation = `move-${index + 1} ${
        30 + (index + 1) * 0.02
      }s infinite`
    })
  }, [random])

  useEffect(() => {
    registerKeyframes()
    setBubblesStyles()
  }, [registerKeyframes, setBubblesStyles])

  return (
    <>
      {bubbles.map((value) => (
        <div
          className={generateClasses([styles.bubbles, `bubble-${value}`])}
          key={`background-bubble-${value}`}
          ref={(element) => {
            setRef(element, value)
          }}
        />
      ))}
    </>
  )
}

export const BackgroundBubbles = memo(BackgroundBubblesComponent)
