import React, { useContext } from 'react'
import { AppContext } from '../../routers/MainRouter'

export const DashboardScreen = () => {

  const [appData, dispatch] = useContext(AppContext);

  return (
    <>
      <div>DashboardScreen</div>
    </>
  )
}
