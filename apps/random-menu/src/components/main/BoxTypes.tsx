'use client'
import { BoxWave } from 'common-ui'
import { memo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { checkGeolocationPermission } from 'common-utils'
import styles from './BoxTypes.module.css'

const BoxTypes = (): JSX.Element => {
  const router = useRouter()

  const handleClickType = useCallback(
    (type: 'category' | 'restaurant') => {
      if (type === 'restaurant') {
        void checkGeolocationPermission({
          onGranted: () => {
            router.push('/restaurants')
          },
        })
      } else {
        router.push('/categories')
      }
    },
    [router],
  )

  return (
    <div className={styles['box-types']}>
      <button
        className={styles['category-type']}
        onClick={() => {
          handleClickType('category')
        }}
        type="button"
      >
        <BoxWave>
          <div className={styles.contents}>
            <h2 className={styles.label}>CATEGORY</h2>
            <p className={styles.description}>
              한식, 양식, 중식 등 음식 카테고리를 추천해 드려요
            </p>
          </div>
        </BoxWave>
      </button>
      <button
        className={styles['restaurant-type']}
        onClick={() => {
          handleClickType('restaurant')
        }}
        type="button"
      >
        <BoxWave
          backgroundColors={{
            first: 'rgba(255,255,255,0.2)',
            third: 'rgba(255,255,255,0.5)',
          }}
        >
          <div className={styles.contents}>
            <h2 className={styles.label}>RESTAURANTS</h2>
            <p className={styles.description}>
              주변 식당 5군데를 추천해 드려요
            </p>
          </div>
        </BoxWave>
      </button>
    </div>
  )
}

export default memo(BoxTypes)
