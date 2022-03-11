import React, { useContext } from 'react'
import { AppContext } from '../../routers/MainRouter'

export const CreateAcountScreen = () => {

  const [appData, dispatch] = useContext(AppContext);

  return (
    <div>CreateAcountScreen</div>
  )
  
}
