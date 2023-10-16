import { memo, useCallback } from 'react'
import { generateClasses } from 'common-utils'
import MapStore from '@/store/map'
import styles from './ErrorRestaurants.module.css'

const ErrorRestaurants = (): JSX.Element => {
  const { mutate } = MapStore.useNearRestaurants()

  const handleRefresh = useCallback(() => {
    ;(async () => {
      await mutate()
    })()
  }, [mutate])

  return (
    <div
      className={generateClasses([
        'rm-center',
        styles['error-restaurants-wrapper'],
      ])}
    >
      <p className={styles['error-restaurants-text']}>
        알 수 없는 오류가 발생했어요.
      </p>
      <button
        className={styles['refresh-button']}
        onClick={handleRefresh}
        type="button"
      >
        REFRESH
      </button>
    </div>
  )
}

export default memo(ErrorRestaurants)
