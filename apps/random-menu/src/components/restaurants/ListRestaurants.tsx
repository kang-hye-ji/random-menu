'use client'
import { memo, useEffect } from 'react'
import { sampleSize } from 'lodash'
import { useRecoilState } from 'recoil'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import MapStore from '@/store/map'
import RestaurantStore from '@/store/restaurant'
import type { Categories } from '@/types/categories'
import RestaurantItem from './RestaurantItem'
import styles from './ListRestaurants.module.css'

const ListRestaurants = (): JSX.Element | null => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') as Categories
  const { data } = MapStore.useNearRestaurants(category)
  const [selectedRestaurants, setSelectedRestaurants] = useRecoilState(
    RestaurantStore.selectedRestaurantsAtom,
  )

  useEffect(() => {
    if (data?.length) {
      setSelectedRestaurants(sampleSize(data, 5))
    }
  }, [data, setSelectedRestaurants])

  if (!data?.length) {
    return null
  }

  return (
    <div className={styles['list-restaurants-wrapper']}>
      <div style={{ position: 'relative' }}>
        <p className={styles['list-restaurants-title']}>짜잔</p>
        <Link
          className={styles['pick-button']}
          href="/restaurants/pick"
          replace
        >
          하나만 골라줘?
        </Link>
      </div>
      <div className={styles['list-restaurants']}>
        {selectedRestaurants.map((item) => (
          <RestaurantItem item={item} key={item.place_id} />
        ))}
      </div>
    </div>
  )
}

export default memo(ListRestaurants)
