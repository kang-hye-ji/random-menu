export const getTemporaryMap = (): google.maps.Map => {
  return new google.maps.Map(document.createElement('div'))
}
