import { errorHandler } from './error'

export const getCurrentPosition = async (): Promise<
  GeolocationPosition | undefined
> => {
  const { geolocation } = navigator || {}
  if (!geolocation) {
    return
  }

  return new Promise<GeolocationPosition>((resolve) => {
    try {
      geolocation.getCurrentPosition((position) => {
        resolve(position)
      })
    } catch (err) {
      errorHandler(err, '현재 위치를 조회하는 중')
    }
  })
}

export const getLatLng = async (): Promise<{ lat: number; lng: number }> => {
  const currPosition = await getCurrentPosition()
  const { coords } = currPosition || {}
  return { lat: coords?.latitude || 0, lng: coords?.longitude || 0 }
}
