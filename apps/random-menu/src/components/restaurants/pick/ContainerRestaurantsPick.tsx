'use client'

import { useRecoilValue } from 'recoil'
import { useEffect, useState } from 'react'
import { sample } from 'lodash'
import RestaurantStore from '@/store/restaurant'
import SpinnerRestaurants from '../SpinnerRestaurants'
import RestaurantItem from '../RestaurantItem'
import ErrorRestaurantPick from './ErrorRestaurantPick'

const ContainerRestaurantsPick = (): JSX.Element => {
  const selectedRestaurants = useRecoilValue(
    RestaurantStore.selectedRestaurantsAtom,
  )
  const [pickedRestaurant, setPickedRestaurant] =
    useState<google.maps.places.PlaceResult>()

  useEffect(() => {
    setTimeout(() => {
      setPickedRestaurant(sample(selectedRestaurants))
    }, 1500)
  }, [selectedRestaurants])

  if (!selectedRestaurants.length) {
    return <ErrorRestaurantPick />
  }

  if (!pickedRestaurant) {
    return <SpinnerRestaurants />
  }

  return (
    <div
      className="rm-center"
      style={{
        maxWidth: 500,
      }}
    >
      <RestaurantItem animation item={pickedRestaurant} />
    </div>
  )
}

export default ContainerRestaurantsPick
