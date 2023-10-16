import { memo } from 'react'

const EmptyRestaurants = (): JSX.Element => {
  return (
    <div className="rm-center">
      <p style={{ color: 'white' }}>근처에 식당이 없어요.</p>
    </div>
  )
}

export default memo(EmptyRestaurants)
