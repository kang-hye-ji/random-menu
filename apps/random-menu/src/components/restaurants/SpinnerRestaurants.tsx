import { SpinnerRing } from 'common-ui'
import { memo } from 'react'
import { generateClasses } from 'common-utils'
import styles from './SpinnerRestaurants.module.css'

const SpinnerRestaurants = (): JSX.Element => {
  return (
    <div
      className={generateClasses([
        'rm-center',
        styles['spinner-restaurants-wrapper'],
      ])}
    >
      <SpinnerRing />
    </div>
  )
}

export default memo(SpinnerRestaurants)
