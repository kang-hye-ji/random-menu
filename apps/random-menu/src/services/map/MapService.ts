import { getLatLng } from 'common-utils'
import type { Fetcher } from 'swr'
import { getTemporaryMap } from '@/utils/map'
import type { Categories } from '@/types/categories'

type GetNearRestaurantsParams = {
  key: string
  category?: Categories
}
const RADIUS = 1000
export const getNearRestaurants: Fetcher<
  google.maps.places.PlaceResult[] | null,
  GetNearRestaurantsParams
> = async ({ category }): Promise<google.maps.places.PlaceResult[] | null> => {
  const { lat, lng } = await getLatLng()
  const latLng = new google.maps.LatLng(lat, lng)
  const request = {
    location: latLng,
    radius: RADIUS,
    keyword: category,
    openNow: true,
    type: 'restaurant',
  }
  const placeService = new google.maps.places.PlacesService(getTemporaryMap())

  return new Promise((resolve, reject) => {
    placeService.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(results)
        return
      }
      reject(Error('Failed Get Near Restaurants'))
    })
  })
}
