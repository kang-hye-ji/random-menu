import type { SWRResponse } from 'swr'
import useSWR from 'swr'
import { SWR_STORE } from '@/contants/store'
import { getNearRestaurants } from '@/services/map/MapService'
import type { Categories } from '@/types/categories'

type NearRestaurantsData = google.maps.places.PlaceResult[] | null | undefined
type UseNearRestaurants = SWRResponse<NearRestaurantsData, unknown>

export const useNearRestaurants = (
  category?: Categories,
): UseNearRestaurants => {
  const response = useSWR<NearRestaurantsData, unknown>(
    SWR_STORE.MAP.KEYS.NearRestaurants,
    (key: string) => getNearRestaurants({ key, category }),
  )

  return response
}
