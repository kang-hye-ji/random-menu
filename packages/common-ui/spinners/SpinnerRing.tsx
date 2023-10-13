import { memo } from 'react'
import styles from './SpinnerRing.module.css'

type Props = {
  maxWidth?: number | string
}
function SpinnerRingComponent({ maxWidth = '6rem' }: Props): JSX.Element {
  return <span className={styles['spinner-ring']} style={{ maxWidth }} />
}

export const SpinnerRing = memo(SpinnerRingComponent)
