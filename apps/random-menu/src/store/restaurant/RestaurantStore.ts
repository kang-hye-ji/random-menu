import { atom } from 'recoil'
import { ATOM_STORE } from '@/contants/store'

export const selectedRestaurantsAtom = atom<google.maps.places.PlaceResult[]>({
  key: ATOM_STORE.RESTAURANT.KEYS.SelectedRestaurants,
  default: [],
})
