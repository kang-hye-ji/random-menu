export const getCurrentPosition = (): GeolocationPosition | undefined => {
  const { geolocation } = navigator || {}
  if (!geolocation) {
    return
  }

  geolocation.getCurrentPosition((position) => {
    return position
  })
}
