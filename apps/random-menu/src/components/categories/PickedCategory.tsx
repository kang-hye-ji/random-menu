import { memo, useCallback } from 'react'
import { checkGeolocationPermission, generateClasses } from 'common-utils'
import { sample } from 'lodash'
import { useRouter } from 'next/navigation'
import { CATEGORIES } from '@/constants/categories'
import styles from './PickedCategory.module.css'

const PickedCategory = (): JSX.Element => {
  const router = useRouter()
  const category = sample(CATEGORIES) || ''

  const handleGoRestaurants = useCallback(() => {
    void checkGeolocationPermission({
      onGranted: () => {
        router.push(`/restaurants?category=${category}`)
      },
    })
  }, [router, category])

  return (
    <div
      className={generateClasses([
        'rm-center',
        'rm-fade-in',
        styles['picked-category-wrapper'],
      ])}
    >
      <span
        className={generateClasses([
          'rm-fade-in',
          styles['picked-category-text'],
        ])}
      >
        {category}
      </span>
      <button
        className={styles['go-restaurants-button']}
        onClick={handleGoRestaurants}
        type="button"
      >
        {category} 식당 추천 ▷
      </button>
    </div>
  )
}

export default memo(PickedCategory)
