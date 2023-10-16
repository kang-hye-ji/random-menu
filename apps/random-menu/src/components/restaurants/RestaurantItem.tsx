import { memo } from 'react'
import Image from 'next/image'
import { generateClasses } from 'common-utils'
import styles from './RestaurantItem.module.css'

type Props = {
  item: google.maps.places.PlaceResult
  animation?: boolean
}

const RestaurantItem = ({ item, animation }: Props): JSX.Element => {
  const { name, vicinity, photos, rating } = item
  const photo = photos?.[0]?.getUrl() || ''

  return (
    <div
      className={generateClasses([
        styles['restaurant-box'],
        animation ? styles.animation : '',
      ])}
    >
      <Image
        alt={name || '식당 이미지'}
        className={styles['restaurant-image']}
        height={100}
        src={photo || '/images/food.png'}
        width={100}
      />

      <div>
        <p className={styles['restaurant-name']}>{name}</p>
        <p className={styles['restaurant-address']}>{vicinity}</p>
        {rating ? (
          <p className={styles['restaurant-rating']}>★구글평점 {rating}</p>
        ) : null}
      </div>
    </div>
  )
}

export default memo(RestaurantItem)
