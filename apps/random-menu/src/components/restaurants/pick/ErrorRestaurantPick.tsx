import { memo } from 'react'

const ErrorRestaurantPick = (): JSX.Element => {
  return (
    <div className="rm-center">
      <p style={{ color: 'white' }}>잘못된 접근입니다.</p>
    </div>
  )
}

export default memo(ErrorRestaurantPick)
