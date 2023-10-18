'use client'
import { useSearchParams } from 'next/navigation'
import MapStore from '@/store/map'
import type { Categories } from '@/types/categories'
import EmptyRestaurants from './EmptyRestaurants'
import SpinnerRestaurants from './SpinnerRestaurants'
import ErrorRestaurants from './ErrorRestaurants'
import ListRestaurants from './ListRestaurants'

const ContainerRestaurants = (): JSX.Element => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') as Categories
  const { data, error, isLoading, isValidating } =
    MapStore.useNearRestaurants(category)

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
