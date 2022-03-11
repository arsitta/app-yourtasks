import React, { useContext } from 'react'
import { AppContext } from '../../routers/MainRouter'

export const LoginAcountScreen = () => {

  const [appData, dispatch] = useContext(AppContext);
  
  return (
    <>
      <div>LoginAcountScreen</div>
    </>
  )
}
