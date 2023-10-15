import useSWR from 'swr'
import { STORE } from '@/contants/store'
import { getNearRestaurants } from '@/services/map/MapService'
import type { Categories } from '@/types/categories'

type UseNearRestaurants = {
  data: google.maps.places.PlaceResult[] | null | undefined
}
export const useNearRestaurants = (
  category?: Categories,
): UseNearRestaurants => {
  const { data } = useSWR<UseNearRestaurants['data']>(
    STORE.MAP.KEYS.NearRestaurants,
    (key: string) => getNearRestaurants({ key, category }),
  )

  return { data }
}
