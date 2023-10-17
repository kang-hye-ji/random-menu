'use client'
import MapStore from '@/store/map'
import EmptyRestaurants from './EmptyRestaurants'
import SpinnerRestaurants from './SpinnerRestaurants'
import ErrorRestaurants from './ErrorRestaurants'
import ListRestaurants from './ListRestaurants'

const ContainerRestaurants = (): JSX.Element => {
  const { data, error, isLoading, isValidating } = MapStore.useNearRestaurants()

  if (isLoading || isValidating) {
    return <SpinnerRestaurants />
  }

  if (error) {
    return <ErrorRestaurants />
  }

  if (data === null) {
    return <EmptyRestaurants />
  }

  return <ListRestaurants />
}

export default ContainerRestaurants
