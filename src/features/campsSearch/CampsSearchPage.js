import React from 'react'
import { useLocation } from 'react-router'

const CampsSearchPage = () => {
  const {
    state: { location, startDate, endDate, maxPrice },
  } = useLocation()
  return (
    <div className={'pt-16'}>
      <h3>Search</h3>
      {/*<p>location: {location}</p>*/}
      {/*<p>startDate: {startDate?.toISOString()}</p>*/}
      {/*<p>endDate: {endDate?.toISOString()}</p>*/}
      {/*<p>maxPrice: {maxPrice}</p>*/}
    </div>
  )
}

export default CampsSearchPage
